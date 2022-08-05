# -*- coding: utf-8 -*-
"""
Created on Fri Aug  5 15:19:57 2022

@author: Aharsi Majumdar
"""

from tkinter import *
import random

root=Tk()

root.title("Luck friend Wheel")
root.geometry("640x480")

friendlist = []

def add():
    friendlist.append(enter_not.get())
    lbl1["text"] = "Your friendlist: " + str(friendlist)

def show():
    rng = random.randint(0, len(friendlist)-1)
    lbl2["text"] = str(rng)
    lbl3["text"] = "your lucky friend is: " + str(friendlist[rng])

enter_not = Entry(root)
btn1 = Button(root, text="Add to the friendlist", command=add)
lbl1 = Label(root, text="Your friendlist : []")
btn2 = Button(root, text="Who is your Lucky Friend?", command=show)
lbl2 = Label(root)
lbl3 = Label(root, text="your lucky friend is: ")

enter_not.place(relx=0.5, rely=0.2, anchor=CENTER)
btn1.place(relx=0.5, rely=0.3, anchor=CENTER)
lbl1.place(relx=0.5, rely=0.4, anchor=CENTER)
btn2.place(relx=0.5, rely=0.5, anchor=CENTER)
lbl2.place(relx=0.5, rely=0.6, anchor=CENTER)
lbl3.place(relx=0.5, rely=0.7, anchor=CENTER)

root.mainloop()