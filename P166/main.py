# -*- coding: utf-8 -*-
"""
Created on Sun Mar 26 15:36:40 2023

@author: Aharsi Majumdar
"""

from tkinter import *
from tkinter import ttk

root=Tk()

root.title("Working On Canvas Using Functions")
root.geometry("1000x600")

lbl1=Label(root, text="Choose Color:")
lbl2=Label(root, text="startx")
lbl3=Label(root, text="starty")
lbl4=Label(root, text="endx")
lbl5=Label(root, text="endy")

canvas=Canvas(root, width=990, height=490, bg="white", highlightbackground="gray")
canvas.pack()

coords=[10,50,100,200,300,400,500,600,700,800,900]
cbox1=ttk.Combobox(root,state="readonly",values=coords, width=10)
cbox2=ttk.Combobox(root,state="readonly",values=coords, width=10)
cbox3=ttk.Combobox(root,state="readonly",values=coords, width=10)
cbox4=ttk.Combobox(root,state="readonly",values=coords, width=10)
cbox5=ttk.Combobox(root,state="readonly",values=["green", "yellow", "red", "blue"], width=10)

lbl1.place(relx=0.1, rely=0.85, anchor=CENTER)
cbox1.place(relx=0.2, rely=0.85, anchor=CENTER)
lbl2.place(relx=0.3, rely=0.85, anchor=CENTER)
cbox2.place(relx=0.4, rely=0.85, anchor=CENTER)
lbl3.place(relx=0.5, rely=0.85, anchor=CENTER)
cbox3.place(relx=0.6, rely=0.85, anchor=CENTER)
lbl4.place(relx=0.7, rely=0.85, anchor=CENTER)
cbox4.place(relx=0.8, rely=0.85, anchor=CENTER)
lbl5.place(relx=0.6, rely=0.9, anchor=CENTER)
cbox5.place(relx=0.8, rely=0.9, anchor=CENTER)

root.mainloop()