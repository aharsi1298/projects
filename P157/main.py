# -*- coding: utf-8 -*-
"""
Created on Tue Jan  3 16:22:08 2023

@author: Aharsi Majumdar
"""

from tkinter import *
from PIL import Image, ImageTk
from random import randrange

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
pokemons = ["Abra", "Bulbasaur", "Charmander", "Ivysaur", "Jigglypuff", "Kadabra", "Meowth", "Nidoking", "Paras", "Persian", "Pikachu", "Rattata", "Squirtle"]
pokemon_images = [abra, bulbasour, charmender, lyvasour, jigglypuff, kadabra, meowth, nidoking, paras, persion, pikachu, ratata, squirtle]
powerlist = [30, 60, 50, 100, 70, 70, 60, 90, 40, 70, 200, 40, 50]

pl1score = 0

def player1():
    global pl1score
    rand = randrange(0, 13)
    random_pokemon = pokemons[rand]
    pkimg["image"] = pokemon_images[rand]
    random_power = powerlist[rand]
    pl1score += random_power
    pl1s["text"] = pl1score

pl2score = 0

def player2():
    global pl2score
    rand = randrange(0, 13)
    random_pokemon = pokemons[rand]
    pkimg["image"] = pokemon_images[rand]
    random_power = powerlist[rand]
    pl2score += random_power
    pl2s["text"] = pl2score

pl1btn = Button(root, image=button, command=player1)
pl1btn.place(relx=0.1, rely=0.6, anchor=CENTER)
pl2btn = Button(root, image=button, command=player2)
pl2btn.place(relx=0.9, rely=0.6, anchor=CENTER)

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