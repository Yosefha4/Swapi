# routes.py
from flask import Blueprint
from user.models import User
from flask_jwt_extended import jwt_required

# from flask_cors import cross_origin

user_bp = Blueprint('user', __name__)

# @cross_origin
@user_bp.route("/signup", methods=['POST'])
def signup():
    return User().signup()

# @cross_origin
@user_bp.route("/signout")
def signout():
    return User().signout()

# @cross_origin
@user_bp.route("/login" , methods=['POST'])
def login():
    return User().login()


# @cross_origin
@user_bp.route("/verifyToken" , methods=['GET'])
@jwt_required()
def verify():
    return User().verify()

# from flask import Flask
# from app import app
# from user.models import User

# @app.route("/user/signup",methods=['POST'])
# def signup():
#     return User().signup()