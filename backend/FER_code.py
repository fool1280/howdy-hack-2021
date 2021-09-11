import cv2
from fer import FER

img = cv2.imread("/Users/anhnguyen/Data/HowdyHack2021/test-images/0.jpg")
detector = FER(mtcnn=True)
result = detector.top_emotion(img)
print(result)
