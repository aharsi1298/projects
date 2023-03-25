# -*- coding: utf-8 -*-
"""
Created on Sun Mar  5 16:16:16 2023

@author: Aharsi Majumdar
"""

from tkinter import *
from PIL import Image,ImageTk
from tkinter import filedialog

root=Tk()
root.geometry("650x650")
root.configure(background="black")

#print("It atleast runs, right....?")

img=Label(root)
img.place(relx=0.5,rely=0.5,anchor=CENTER)

img_path=""

def open_img():
    global img_path
    img_path=filedialog.askopenfilename(title="Open Image File",filetypes=(("Image Files (*.jpg, *.gif, *.png)","*.jpg *.gif *.png"),))
    imge=ImageTk.PhotoImage(Image.open(img_path).resize((325,325)))
    img["image"] = imge

btn = Button(root, text="Open Image", font=("Arial", 12, "bold"), bg="grey", relief="ridge", padx=0.05, pady=0.05, command=open_img)
btn.place(relx=0.5, rely=0.1, anchor=CENTER)

root.mainloop()