# -*- coding: utf-8 -*-
"""
Created on Thu May 11 16:08:11 2023

@author: Aharsi Majumdar
"""

from tkinter import *
import requests
import json

root=Tk()
root.geometry("400x450")
root.configure(background="turquoise")

city_name_label = Label(root, text="Capital City Name", font=("Bahnschrift Light", 15, "bold"), bg="turquoise", fg="black")
city_name_label.place(relx=0.01, rely=0.01, anchor=NW)

city_entry = Entry(root)
city_entry.place(relx=0.01, rely=0.11, anchor=NW)

country_name = Label(root, text="Country:", font=("Bahnschrift Light", 11, "bold"), bg="turquoise", fg="black")
country_name.place(relx=0.01, rely=0.26, anchor=NW)

region = Label(root, text="Region:", font=("Bahnschrift Light", 11, "bold"), bg="turquoise", fg="black")
region.place(relx=0.01, rely=0.36, anchor=NW)

language = Label(root, text="Language:", font=("Bahnschrift Light", 11, "bold"), bg="turquoise", fg="black")
language.place(relx=0.01, rely=0.46, anchor=NW)

population = Label(root, text="Population:", font=("Bahnschrift Light", 11, "bold"), bg="turquoise", fg="black")
population.place(relx=0.01, rely=0.56, anchor=NW)

area = Label(root, text="Area:", font=("Bahnschrift Light", 11, "bold"), bg="turquoise", fg="black")
area.place(relx=0.01, rely=0.66, anchor=NW)

def city_details():
    api_request = requests.get("https://restcountries.com/v2/capital/" + city_entry.get())
    api_output_json = json.loads(api_request.content)
    
    country_name["text"] = "Country: " + api_output_json[0]["name"]
    region["text"] = "Region: " + api_output_json[0]["region"]
    language["text"] = "Language: " + api_output_json[0]["languages"][0]["name"]
    population["text"] = "Population: " + str(api_output_json[0]["population"])
    area["text"] = "Area: " + str(api_output_json[0]["area"]) + "km²"

btn = Button(root, text="City Details", command=city_details, relief=FLAT, bg="red3", fg="white")
btn.place(relx=0.01, rely=0.81, anchor=NW)

root.mainloop()