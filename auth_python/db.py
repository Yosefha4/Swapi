import os
from flask import Flask
import pymongo
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file


#Database
client = pymongo.MongoClient(os.environ.get("MONGO_URI"))
db = client.user_login_system