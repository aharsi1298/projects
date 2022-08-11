# -*- coding: utf-8 -*-
"""
Created on Thu Aug 11 11:32:29 2022

@author: Aharsi Majumdar
"""

from tkinter import *

root=Tk()
root.title("Encryption with Ascii Code")

root.geometry("640x480")
root.configure(background="#BFEFFF")

input_box = Entry(root)
input_box.place(relx=0.5, rely=0.4, anchor=CENTER)

ascii_text = Label(root, text="Name in Ascii : ", bg="#E0FFFF", fg="black")
encrypted_text = Label(root, text="Encrypted Name :", bg="#E0FFFF", fg="black")
pure_ascii = []

def ltos(list_input):
    res=""
    for letter in list_input:
        res+=letter
    return res

def ascii_convert():
    pure_ascii = []
    input_box_text = input_box.get()
    ascii_text_text = "Name in Ascii : "
    for letter in input_box_text:
        pure_ascii.append(ord(letter))
        ascii_text_text += str(ord(letter)) + " "
    ascii_text["text"] = ltos(list(ascii_text_text)[:-1]) # Remove trailing whitespace
    ascii_encrypt(pure_ascii)

def ascii_encrypt(asciiness):
    res = "Encrypted Name :"
    for letter in asciiness:
        res += chr(letter-1)
    encrypted_text["text"] = res

def ascii_everything():
    ascii_convert()
    ascii_encrypt()

btn = Button(root, text="Display the Ascii Code and Encrypted value", command=ascii_convert, bg="#4169E1", fg="white")

btn.place(relx=0.5, rely=0.5, anchor=CENTER)

ascii_text.place(relx=0.5, rely=0.6, anchor=CENTER)
encrypted_text.place(relx=0.5, rely=0.7, anchor=CENTER)

root.mainloop()