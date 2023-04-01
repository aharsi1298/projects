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

def circle(event):
    oldx=cbox1.get()
    oldy=cbox2.get()
    newx=cbox3.get()
    newy=cbox4.get()
    keypress="c"
    draw(keypress, oldx, oldy, newx, newy)

def rectangle(event):
    oldx=cbox1.get()
    oldy=cbox2.get()
    newx=cbox3.get()
    newy=cbox4.get()
    keypress="r"
    draw(keypress, oldx, oldy, newx, newy)

def line(event):
    oldx=cbox1.get()
    oldy=cbox2.get()
    newx=cbox3.get()
    newy=cbox4.get()
    keypress="l"
    draw(keypress, oldx, oldy, newx, newy)

def draw(keypress, oldx, oldy, newx, newy):
    colour=cbox5.get()
    if keypress=="c":
        canvas.create_oval(oldx, oldy, newx, newy, width=3, fill=colour)
    elif keypress=="r":
        canvas.create_rectangle(oldx, oldy, newx, newy, width=3, fill=colour)
    elif keypress=="l":
        canvas.create_line(oldx, oldy, newx, newy, width=3, fill=colour)


lbl1=Label(root, text="startx")
lbl2=Label(root, text="starty")
lbl3=Label(root, text="endx")
lbl4=Label(root, text="endy")
lbl5=Label(root, text="Choose Color:")

canvas=Canvas(root, width=990, height=490, bg="white", highlightbackground="gray")
canvas.pack()

coords_x=[10,50,100,200,300,400,500,600,700,800,900]
coords_y=[10,50,100,200,300,400]
cbox1=ttk.Combobox(root,state="readonly",values=coords_x, width=10)
cbox2=ttk.Combobox(root,state="readonly",values=coords_y, width=10)
cbox3=ttk.Combobox(root,state="readonly",values=coords_x, width=10)
cbox4=ttk.Combobox(root,state="readonly",values=coords_y, width=10)
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

root.bind("<c>", circle)
root.bind("<r>", rectangle)
root.bind("<l>", line)

root.mainloop()