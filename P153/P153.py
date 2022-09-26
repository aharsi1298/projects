# -*- coding: utf-8 -*-
"""
Created on Fri Sep 23 16:35:20 2022

@author: Aharsi Majumdar
"""

from tkinter import *
from random import randrange

root=Tk()
root.title("P153: Testing Random Function")

root.geometry("640x480")
root.configure(background="#FFFF00")

gpEntry = Entry(root)
gpLbl = Label(root)

lbl = Label(root)

hash_table = [[['A','B','C','D','E','F'],["CH1","CH2"],["!","\"","#","$","%","&","'","("]]]

def genPassWord():
    lbl["text"] = hash_table[0][0][randrange(0,6)]+hash_table[0][1][randrange(0,2)]+hash_table[0][2][randrange(0,8)]

btn = Button(root, text="New Password", command=genPassWord, bg="#4169E1", fg="white")

gpEntry.place(relx=0.5, rely=0.3, anchor=CENTER)
gpLbl.place(relx=0.5, rely=0.4, anchor=CENTER)
btn.place(relx=0.5, rely=0.5, anchor=CENTER)
lbl.place(relx=0.5, rely=0.6, anchor=CENTER)

root.mainloop()