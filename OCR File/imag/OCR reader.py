import cv2
import easyocr
import matplotlib.pyplot as plt

#read image

image_path ='D:\OCR\imag'

img=cv2.imread(imag_path)

#install text detector

reader = easyocr.reader(['en'],gpu=False)

# detect text on image

text_= reader.readetext(img)

threshold = 0.25
#draw bbox and text
for t in text_:
    print(t)

    bbox, text, score = t

    if sorce > threshold:
       cv2.rectangle(img,bbox[0],[2], (0,255,0),5)
       cv2.putText(img, text,bbox[0],cv2.FONT_HERSHEY_COMPLEX,0.65,(255,0,0),2)

    plt.imshow(cv2.cvtcolor(img, cv2.COLOR_BGR2RGB))
    plt.show()



