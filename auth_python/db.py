from flask import Flask
import pymongo

#Database
client = pymongo.MongoClient('mongodb+srv://yosefha4:yosefha4@cluster0.k4kiax3.mongodb.net/?retryWrites=true&w=majority')
db = client.user_login_system