# -*- coding: utf-8 -*-
"""
Created on Sun Sep 11 13:55:26 2022

@author: Aharsi Majumdar
"""

from tkinter import *

root=Tk()
root.title("Sales Application")

root.geometry("640x480")
root.configure(background="#FFFF00")

tupMonths = ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')

tupProfits = (20000, 45000, 78000, 97000, 12000, 456000, 65000, 54000, 10000, 30000, 70000, 90000)

lblShowMonths = Label(root, text="Months :" + str(tupMonths))
lblShowProfits = Label(root, text="Profits (in rupees) :" + str(tupProfits))

def maxProfit():
    lblShowMaxProfit["text"] = "Maximum profit of " + str(max(tupProfits)) + " was given in the month of " + tupMonths[tupProfits.index(max(tupProfits))]

btnMaxProfit = Button(root, text="Show Max Profitable Month", command=maxProfit, bg="#4169E1", fg="white")
lblShowMaxProfit = Label(root)

def minProfit():
    lblShowMinProfit["text"] = "Minimum profit of " + str(min(tupProfits)) + " was given in the month of " + tupMonths[tupProfits.index(min(tupProfits))]

btnMinProfit = Button(root, text="Show Min Profitable Month", command=minProfit, bg="#4169E1", fg="white")
lblShowMinProfit = Label(root)

lblShowMonths.place(relx=0.5, rely=0.25, anchor=CENTER)
lblShowProfits.place(relx=0.5, rely=0.35, anchor=CENTER)

btnMaxProfit.place(relx=0.5, rely=0.45, anchor=CENTER)
lblShowMaxProfit.place(relx=0.5, rely=0.55, anchor=CENTER)

btnMinProfit.place(relx=0.5, rely=0.65, anchor=CENTER)
lblShowMinProfit.place(relx=0.5, rely=0.75, anchor=CENTER)

root.mainloop()