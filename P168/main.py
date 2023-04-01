# -*- coding: utf-8 -*-
"""
Created on Sat Apr  1 15:48:22 2023

@author: Aharsi Majumdar
"""

from datetime import datetime as date

class Bookshelf():
    
    currency_dict = {
        "dollars": ["US$", ""],
        "euros": ["€", ""],
        "rupees": ["₹", ""],
        "philippine pesos": ["₱", ""],
        "latin american peso": ["$", ""],
        "pounds": ["£", ""],
        "yen": ["¥", ""],
        "rubles": ["₽", ""]
    }
    
    def __init__(self):
        self.book_list = []
        self.count = 0
    
    def add_book(self, name, author, price, currency, publishing_year):
        self.book_list.append(Book(name, author, price, currency, publishing_year))
        print("Book " + name + " added to bookshelf")
        self.show_book_info(self.count)
    
    def show_book_info(self, index):
        book = self.book_list[index]
        print("Book Name: " + book.name)
        print("Book Author: " + book.author)
        print("Book Price: " + Bookshelf.currency_convert(str(book.price), book.currency))
        print("Book was published in: " + str(book.publishing_year))
        print("This book was published " + str(book.years_since_publish()) + " years ago")
        self.count += 1
    
    def currency_convert(string, currency):
        followee = Bookshelf.currency_dict[currency][0]
        follower = Bookshelf.currency_dict[currency][1]
        return followee + string + follower

class Book():
    def __init__(self, name, author, price, currency, publishing_year):
        self._name = name
        self._author = author
        self._price = price
        self._currency = currency
        self._publishing_year = publishing_year
    
    def get_name(self):
        return self._name
    def set_name(self, name):
        self._name = name
    
    def get_author(self):
        return self._author
    def set_author(self, author):
        self._author = author
    
    def get_price(self):
        return self._price
    def set_price(self, price):
        self._price = price
    
    def get_currency(self):
        return self._currency
    def set_currency(self, currency):
        self._currency = currency
    
    def get_publishing_year(self):
        return self._publishing_year
    def set_publishing_year(self, publishing_year):
        self._publishing_year = publishing_year
    
    name = property(get_name, set_name)
    author = property(get_author, set_author)
    price = property(get_price, set_price)
    currency = property(get_currency, set_currency)
    publishing_year = property(get_publishing_year, set_publishing_year)
    
    def years_since_publish(self):
        current_year = date.now().year
        return current_year - self._publishing_year

bookshelf = Bookshelf()
bookshelf.add_book("Harry Potter and the Philosopher's Stone", "JK Rowling", 33.88, "dollars", 1997)
bookshelf.add_book("Diary of a Wimpy Kid", "Jeff Kinney", 7.83, "dollars", 2017)