# How to run

* environment
```
python3.10 -m venv venv
source venv/bin/activate.fish
pip install -r requriements.txt
```
* download model and put into models folder
```
cd models
wget https://huggingface.co/spaces/z-uo/CLIP-SAM/raw/main/models/sam_vit_h_4b8939.pth
```
* image demo single frame
```
python app.py
```
* use command:
```
python video_seg.py video/livingroom.mp4 video/livingroom_out.mp4 "cat" 
```