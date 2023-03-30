# -*- coding: utf-8 -*-
"""
Created on Thu Mar 30 19:00:39 2023

@author: Aharsi Majumdar
"""

import matplotlib.pyplot as plt
import psutil as p

app_name_dict = {}

count = 0

for process in p.process_iter():
    count += 1
    if count < 7:
        name = process.name()
        cpu_usage = p.cpu_percent()
        print("Name - " + name + "\x09CPU Usage - " + str(cpu_usage))
        app_name_dict.update({name: cpu_usage})
    else:
        break

keymax = max(app_name_dict, key=app_name_dict.get)
print(keymax)
keymin = min(app_name_dict, key=app_name_dict.get)
print(keymin)

name_list = [keymax, keymin]
print(name_list)

app = app_name_dict.values()

max_app = max(app)
print(max_app)

min_app = min(app)
print(min_app)

max_min_list = [max_app, min_app]
print(max_min_list)

plt.figure(figsize=(15,7))
plt.xlabel("Application")
plt.ylabel("CPU Usage")
plt.bar(name_list, max_min_list, width=0.6, color=("blue", "pink"))
plt.show()