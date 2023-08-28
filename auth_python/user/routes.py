# routes.py
from flask import Blueprint
from user.models import User

user_bp = Blueprint('user', __name__)

@user_bp.route("/signup", methods=['POST'])
def signup():
    return User().signup()

@user_bp.route("/signout")
def signout():
    return User().signout()

@user_bp.route("/login")
def login():
    return User().login()

# from flask import Flask
# from app import app
# from user.models import User

# @app.route("/user/signup",methods=['POST'])
# def signup():
#     return User().signup()