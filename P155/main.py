# -*- coding: utf-8 -*-
"""
Created on Wed Aug 31 12:53:07 2022

@author: Aharsi Majumdar
"""

from tkinter import *
from random import randrange

root=Tk()
root.title("No Dictionary")

root.geometry("640x480")

unused_addict = {
    #
}

def nondict_color():
    hex_code = "#%02x%02x%02x" % (randrange(0, 256), randrange(0, 256), randrange(0, 256))

    root.configure(background=hex_code)

btn = Button(root, text="click me for new background colour", command=nondict_color)

btn.place(relx=0.5, rely=0.5, anchor=CENTER)

root.mainloop()