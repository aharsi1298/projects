# -*- coding: utf-8 -*-
"""
Created on Tue Aug 16 11:32:54 2022

@author: Aharsi Majumdar
"""

# Project C152

from tkinter import *
from random import randrange

root=Tk()
root.title("Country Capitals")

root.geometry("640x480")
root.configure(background="#FFFF00")

country_input = Entry(root)
capital_input = Entry(root)

lbl_country_list = Label(root, text="Country Name  :[]", bg="#FFFF00", fg="black")
lbl_capital_list = Label(root, text="City Name  :[]", bg="#FFFF00", fg="black")
lbl_random_country = Label(root, text="Random Country :  ", bg="#FFFF00", fg="black")
lbl_random_city = Label(root, text="Random City :  ", bg="#FFFF00", fg="black")

country_list = []
city_list = []

def update_lists():
    country_list.append(country_input.get())
    lbl_country_list["text"] = "Country Name  :" + str(country_list)
    city_list.append(capital_input.get())
    lbl_capital_list["text"] = "Capital Name  :" + str(city_list)

def genRNG():
    lbl_random_country["text"] = "Random Country :  " + country_list[randrange(0, len(country_list))]
    lbl_random_city["text"] = "Random City :  " + city_list[randrange(0, len(city_list))]

btn_update_lists = Button(root, text="Display Country And City Name", command=update_lists, bg="#4169E1", fg="white")
btn_display_rand = Button(root, text="Display Country And City Name Randomly", command=genRNG, bg="#4169E1", fg="white")

country_input.place(relx=0.5, rely=0.2, anchor=CENTER)
capital_input.place(relx=0.5, rely=0.3, anchor=CENTER)

btn_update_lists.place(relx=0.5, rely=0.4, anchor=CENTER)

lbl_country_list.place(relx=0.5, rely=0.5, anchor=CENTER)
lbl_capital_list.place(relx=0.5, rely=0.6, anchor=CENTER)

btn_display_rand.place(relx=0.5, rely=0.7, anchor=CENTER)

lbl_random_country.place(relx=0.5, rely=0.8, anchor=CENTER)
lbl_random_city.place(relx=0.5, rely=0.9, anchor=CENTER)

root.mainloop()