# -*- coding: utf-8 -*-
"""
Created on Thu Apr 20 16:51:00 2023

@author: Aharsi Majumdar
"""

from tkinter import *
from tkinter import ttk
from googletrans import Translator, LANGUAGES

root=Tk()
root.title("Language Translation")
root.geometry("850x500")
root.config(background="pink")

lbl_heading = Label(root, text="LANGUAGE TRANSLATOR", bg="pink", font=("Bahnschrift Light", 28, "bold"))
lbl_heading.place(relx=0.5, rely=0.1, anchor=CENTER)

lbl_enter_text = Label(root, text="Enter Text", bg="pink", font=("Bahnschrift SemiLight SemiConde", 10))
lbl_enter_text.place(relx=0.1, rely=0.2, anchor=CENTER)

textarea = Text(root, font=("Bell MT", 15), height=10, wrap=WORD, width=35, padx=10, pady=10, bd=0)
textarea.place(relx=0.025, rely=0.25, anchor=NW)

root.mainloop()