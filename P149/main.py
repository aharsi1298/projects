# -*- coding: utf-8 -*-
"""
Created on Thu Aug 11 13:45:41 2022

@author: Aharsi Majumdar
"""

from tkinter import *
from random import randint

root=Tk()
root.title("Random Word Generator")

root.geometry("640x480")
root.configure(background="#FFFF00")

lbl = Label(root)

alpha_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def genRWG():
    random_alpha1 = alpha_list[randint(0, 25)]
    random_alpha2 = alpha_list[randint(0, 25)]
    random_alpha3 = alpha_list[randint(0, 25)]
    random_alpha4 = alpha_list[randint(0, 25)]
    random_alpha5 = alpha_list[randint(0, 25)]
    
    lbl["text"] = str(random_alpha1) + str(random_alpha2) + str(random_alpha3) + str(random_alpha4) + str(random_alpha5)

btn = Button(root, text="Generated Random Words", command=genRWG, bg="#4169E1", fg="white")

btn.place(relx=0.5, rely=0.4, anchor=CENTER)
lbl.place(relx=0.5, rely=0.5, anchor=CENTER)

root.mainloop()