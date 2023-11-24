import cv2
import sys
from segment_anything import build_sam, SamAutomaticMaskGenerator
from PIL import Image, ImageDraw
import clip
import torch
import numpy as np
from tqdm import tqdm

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# preso spunto da https://github.com/maxi-w/CLIP-SAM/blob/main/main.ipynb
mask_generator = SamAutomaticMaskGenerator(build_sam(checkpoint="./models/sam_vit_h_4b8939.pth").to(device=device))
model, preprocess = clip.load("ViT-B/32", device=device)

def convert_box_xywh_to_xyxy(box):
    x1 = box[0]
    y1 = box[1]
    x2 = box[0] + box[2]
    y2 = box[1] + box[3]
    return [x1, y1, x2, y2]

def segment_image(image, segmentation_mask):
    image_array = np.array(image)
    segmented_image_array = np.zeros_like(image_array)
    segmented_image_array[segmentation_mask] = image_array[segmentation_mask]
    segmented_image = Image.fromarray(segmented_image_array)
    black_image = Image.new("RGB", image.size, (0, 0, 0))
    transparency_mask = np.zeros_like(segmentation_mask, dtype=np.uint8)
    transparency_mask[segmentation_mask] = 155
    transparency_mask_image = Image.fromarray(transparency_mask, mode='L')
    black_image.paste(segmented_image, mask=transparency_mask_image)
    return black_image

@torch.no_grad()
def retriev(elements: list[Image.Image], search_text: str) -> int:
    preprocessed_images = [preprocess(image).to(device) for image in elements]
    tokenized_text = clip.tokenize([search_text]).to(device)
    stacked_images = torch.stack(preprocessed_images)
    image_features = model.encode_image(stacked_images)
    text_features = model.encode_text(tokenized_text)
    image_features /= image_features.norm(dim=-1, keepdim=True)
    text_features /= text_features.norm(dim=-1, keepdim=True)
    probs = 100. * image_features @ text_features.T
    return probs[:, 0].softmax(dim=0)

def get_indices_of_values_above_threshold(values, threshold):
    return [i for i, v in enumerate(values) if v > threshold]


def pred(search_string, open_cv_image):

    # open_cv_image = np.array(img)[:, :, ::-1] 
    #open_cv_image = np.array(img)
    img = Image.fromarray(cv2.cvtColor(open_cv_image, cv2.COLOR_BGR2RGB))
    original_image = img.copy()
    # print(open_cv_image, open_cv_image.shape)
    # exit()
    masks = mask_generator.generate(open_cv_image)
    # Cut out all masks
    cropped_boxes = []

    for mask in masks:
        cropped_boxes.append(segment_image(img, mask["segmentation"]).crop(convert_box_xywh_to_xyxy(mask["bbox"])))

    scores = retriev(cropped_boxes, search_string)
    indices = get_indices_of_values_above_threshold(scores, 0.05)

    segmentation_masks = []

    for seg_idx in indices:
        segmentation_mask_image = Image.fromarray(masks[seg_idx]["segmentation"].astype('uint8') * 255)
        segmentation_masks.append(segmentation_mask_image)

    overlay_image = Image.new('RGBA', img.size, (0, 0, 0, 0))
    overlay_color = (255, 0, 0, 200)

    draw = ImageDraw.Draw(overlay_image)
    for segmentation_mask_image in segmentation_masks:
        draw.bitmap((0, 0), segmentation_mask_image, fill=overlay_color)

    result_image = Image.alpha_composite(original_image.convert('RGBA'), overlay_image)

    # return result_image, overlay_image
    return result_image

def process_frame(frame, labels):
    # Esempio di funzione che potrebbe elaborare ogni frame
    # Puoi modificare questa parte per adattarla alle tue esigenze
    # Ad esempio, potresti voler aggiungere del testo ai frame utilizzando le etichette fornite
    # for label in labels:
    #     cv2.putText(frame, label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    return np.array(pred(labels[0], frame))[:, :, ::-1] 

def main(input_path, output_path, labels):
    cap = cv2.VideoCapture(input_path)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, 20.0, (int(cap.get(3)), int(cap.get(4))))

    pbar = tqdm(total=frame_count)

    while cap.isOpened():
        pbar.update(1)
        ret, frame = cap.read()
        if not ret:
            break

        frame = process_frame(frame, labels)
        out.write(frame)
    
    pbar.close()
    cap.release()
    out.release()

if __name__ == "__main__":
    input_path = sys.argv[1] if len(sys.argv) > 1 else input("Enter input video path: ")
    output_path = sys.argv[2] if len(sys.argv) > 2 else input("Enter output video path: ")
    labels = sys.argv[3:] if len(sys.argv) > 3 else input("Enter labels (comma-separated): ").split(',')

    main(input_path, output_path, labels)