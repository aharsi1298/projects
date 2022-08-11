# -*- coding: utf-8 -*-
"""
Created on Wed Aug  3 20:55:57 2022

@author: Aharsi Majumdar
"""

"""
from tkinter import *

root=Tk()
root.title("Encryption with Ascii code")

root.geometry("640x480")
root.configure(background="#32b6e6")

input_box=Entry(root)
btn=Button(root, text="Display the Ascii Code and Encrypted value", command=encrypt, bg="#3250e6", fg="black")
lblnia=Label(root, text="Name in Ascii : ", bg="#4dbbe3", fg="black")
lblen=Label(root, text="Encrypted Name : ", bg="#4dbbe3", fg="black")

def encrypt():
    text=input_box.get()
    if(text==""):
        print("Write something to encrypt!")
    lblnia["text"] = "Name in Ascii : " + asciiConverter(text)
    lblen["text"] = "Encrypted Name : " + encryptStr(text)

def asciiConverter(text):
    res = []
    for letter in text:
        res.append(str(ord(letter)))
    return ' '.join(res)

root.mainloop()
"""