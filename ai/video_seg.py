import cv2
import sys

def process_frame(frame, labels):
    # Esempio di funzione che potrebbe elaborare ogni frame
    # Puoi modificare questa parte per adattarla alle tue esigenze
    # Ad esempio, potresti voler aggiungere del testo ai frame utilizzando le etichette fornite
    for label in labels:
        cv2.putText(frame, label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    return frame

def main(input_path, output_path, labels):
    cap = cv2.VideoCapture(input_path)
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, 20.0, (int(cap.get(3)), int(cap.get(4))))

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        frame = process_frame(frame, labels)
        out.write(frame)

    cap.release()
    out.release()

if __name__ == "__main__":
    input_path = sys.argv[1] if len(sys.argv) > 1 else input("Enter input video path: ")
    output_path = sys.argv[2] if len(sys.argv) > 2 else input("Enter output video path: ")
    labels = sys.argv[3:] if len(sys.argv) > 3 else input("Enter labels (comma-separated): ").split(',')

    main(input_path, output_path, labels)