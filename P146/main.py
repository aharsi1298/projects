# -*- coding: utf-8 -*-
"""
Created on Sat Jul 23 20:13:05 2022

@author: Aharsi Majumdar
"""

from tkinter import *

root = Tk()

root.title("Fibonacci Sum Python TKinter Application")
root.geometry("640x480")

fibonacci_series_label = Label(root, text="Fibonacci Series: ")

def fibonacci_sum():
    if((input_box.get("1.0", "end-1c") == None) or (input_box.get("1.0", END)==None)):
        fibonacci_series_label["text"] = "Please enter a number!"
    tmp = 0
    cv = 1
    pv = 0
    
    fibonacci_series_label["text"] = "Fibonacci Series: 0, 1, "
    i = 0
    l = []
    lsum = 0
    while(i < (int(input_box.get("1.0", "end-1c"))-2)):
        fibonacci_series_label["text"] += str(pv + cv) + ", "
        l.append(pv+cv)
        tmp = pv
        pv = cv
        cv = tmp + pv
        i += 1
    
    j = 0
    while(j < i):
        lsum += l[j]
        j += 1
    fibonacci_sum_label["text"] = "Fibonacci Sum: "+str(lsum)

show_button = Button(root, text="Show Fibonacci Sum", command=fibonacci_sum)
input_box = Text(root, height=1, width=20)
fibonacci_sum_label = Label(root, text="Fibonacci Sum: ")

input_box.pack()
show_button.pack()
fibonacci_series_label.pack()
fibonacci_sum_label.pack()

root.mainloop()