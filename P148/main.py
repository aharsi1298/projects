# -*- coding: utf-8 -*-
"""
Created on Thu Aug 11 12:53:06 2022

@author: Aharsi Majumdar
"""

from tkinter import *
import random

root=Tk()
root.title("List")

root.geometry("640x480")
root.configure(background="#27d2e6")

lbl1 = Label(root, text="Listed_items :  ", bg="#27d2e6", fg="#d47624")
lbl2 = Label(root, bg="#27d2e6", fg="#d47624")

Listed_items = ["Bottle", "Tiffin", "ID Card", "Chocolates", "Chips", "Tickets", "Hanky"]

lbl1["text"] = "Listed_items :  " + str(Listed_items)

def genRNG():
    rng = random.randint(0, len(Listed_items)-1)
    lbl2["text"] = "Put Item no  [" + str(rng) + "]  In bag (Put " + str(Listed_items[rng]) + "  In bag)"

btn = Button(root, text="Which item to put in bag?", command=genRNG, bg="gold", fg="white")

btn.place(relx=0.5, rely=0.5, anchor=CENTER)

lbl1.place(relx=0.5, rely=0.4, anchor=CENTER)
lbl2.place(relx=0.5, rely=0.6, anchor=CENTER)

root.mainloop()