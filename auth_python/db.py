import os
from flask import Flask
import pymongo
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

# MONGO_URI=mongodb+srv://yosefha4:yosefha4@cluster0.k4kiax3.mongodb.net/?retryWrites=true&w=majority

#Database
client = pymongo.MongoClient(os.environ.get("MONGO_URI"))
db = client.user_login_system