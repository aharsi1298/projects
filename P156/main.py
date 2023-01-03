# -*- coding: utf-8 -*-
"""
Created on Tue Jan  3 16:22:08 2023

@author: Aharsi Majumdar
"""

from tkinter import *
from PIL import Image, ImageTk

root=Tk()
root.title("Endless Pokemon Game")

root.geometry("640x480")
root.configure(background="#FEA500")

abra = ImageTk.PhotoImage(Image.open("abra.jpg"))
bulbasour = ImageTk.PhotoImage(Image.open("bulbasour.jpg"))
button = ImageTk.PhotoImage(Image.open("button.jpg"))
charmender = ImageTk.PhotoImage(Image.open("charmender.jpg"))
lyvasour = ImageTk.PhotoImage(Image.open("Iyvasour.jpg"))
jigglypuff = ImageTk.PhotoImage(Image.open("jigglypuff.jpg"))
kadabra = ImageTk.PhotoImage(Image.open("kadabra.jpg"))
meowth = ImageTk.PhotoImage(Image.open("meowth.jpg"))
nidoking = ImageTk.PhotoImage(Image.open("nidoking.jpg"))
paras = ImageTk.PhotoImage(Image.open("paras.jpg"))
persion = ImageTk.PhotoImage(Image.open("persion.jpg"))
pikachu = ImageTk.PhotoImage(Image.open("pikachu.jpg"))
ratata = ImageTk.PhotoImage(Image.open("ratata.jpg"))
squirtle = ImageTk.PhotoImage(Image.open("squirtle.jpg"))

pl1 = Label(root, text="Player 1", bg="red", fg="white")
pl1.place(relx=0.1, rely=0.3, anchor=CENTER)

pl2 = Label(root, text="Player 2", bg="red", fg="white")
pl2.place(relx=0.9, rely=0.3, anchor=CENTER)

pl1s = Label(root, bg="blue", fg="white")
pl1s.place(relx=0.1, rely=0.4, anchor=CENTER)

pl2s = Label(root, bg="blue", fg="white")
pl2s.place(relx=0.9, rely=0.4, anchor=CENTER)

pkimg = Label(root)
pkimg.place(relx=0.5, rely=0.5, anchor=CENTER)

root.mainloop()