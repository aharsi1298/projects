# -*- coding: utf-8 -*-
"""
Created on Tue Jan 24 17:43:25 2023

@author: Aharsi Majumdar
"""

from tkinter import *
from PIL import Image, ImageTk

root=Tk()
root.minsize(650, 650)
root.maxsize(650, 650)
root.configure(background="gray87")

open_img = ImageTk.PhotoImage(Image.open("open.png"))
save_img = ImageTk.PhotoImage(Image.open("save.png"))
exit_img = ImageTk.PhotoImage(Image.open("exit.jpg"))

lbl1 = Label(root, text="File Name: ")
lbl1.place(relx=0.28, rely=0.03, anchor=CENTER)

fileName = Entry(root)
fileName.place(relx=0.46, rely=0.03, anchor=CENTER)

text = Text(root, height=35, width=80, bg="gray", fg="white")
text.place(relx=0.5, rely=0.5, anchor=CENTER)

root.mainloop()