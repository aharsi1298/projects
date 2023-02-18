# -*- coding: utf-8 -*-
"""
Created on Tue Jan 24 17:43:25 2023

@author: Aharsi Majumdar
"""

from tkinter import *
from PIL import Image, ImageTk
from tkinter import filedialog
from tkinter import messagebox
import os
import webbrowser

root=Tk()
root.title("CodePad")
root.minsize(650, 650)
root.maxsize(650, 650)
root.configure(background="gray87")

open_img = ImageTk.PhotoImage(Image.open("open.png"))
save_img = ImageTk.PhotoImage(Image.open("save.png"))
exit_img = ImageTk.PhotoImage(Image.open("exit.jpg"))

lbl1 = Label(root, text="File Name: ")
lbl1.place(relx=0.28, rely=0.03, anchor=CENTER)

fileName = Entry(root)
fileName.place(relx=0.46, rely=0.03, anchor=CENTER)

text = Text(root, height=35, width=80, bg="gray", fg="white")
text.place(relx=0.5, rely=0.5, anchor=CENTER)

name = ""
file_path = ""

def openFile():
    global name
    global html_file
    global file_path
    html_file = filedialog.askopenfilename(title="Open", filetypes=(("HTML Files", "*.html"),))
    if not html_file:
        return
    file_path = html_file
    print(html_file)
    name = os.path.basename(html_file)
    # I am not removing the extension from the file name because it doesn't look professional.
    fileName.delete(0, END)
    fileName.insert(0, name)
    root.title(name + " - CodePad")
    html_file = open(html_file, "r")
    paragraph = html_file.read()
    text.delete(1.0, END)
    text.insert(1.0, paragraph)
    html_file.close()

def save():
    input_name = file_path
    if not input_name:
        input_name = filedialog.asksaveasfilename(title="Save As", filetypes=(("HTML Files","*.html"),))
    
    input_file = open(input_name,"w")
    textinput = text.get("1.0", END)
    print(textinput)
    input_file.write(textinput)
    messagebox.showinfo("Save", "Successfully saved to file.")

def run():
    global file_path
    #webbrowser.get("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s").open(file_path)
    webbrowser.open(file_path)

open_btn = Button(root, image=open_img, command=openFile)
open_btn.place(relx=0.05, rely=0.03, anchor=CENTER)
save_btn = Button(root, image=save_img, command=save)
save_btn.place(relx=0.10, rely=0.03, anchor=CENTER)
run_btn = Button(root, image=exit_img, command=run)
run_btn.place(relx=0.15, rely=0.03, anchor=CENTER)

root.mainloop()

























