from flask import Flask,jsonify, redirect,request,session
from flask_jwt_extended import create_access_token
import uuid
import bcrypt
# from app import db
from db import db



class User:

    def start_session(self,user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200


    def signup(self):
        user_data = request.json  # Assuming the request contains JSON data
        print(user_data)

        password = user_data.get('password')
        encryptPass = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
        hashed_password_str = encryptPass.decode('utf-8')


        # Create the user object
        user = {
            "_id":uuid.uuid4().hex,
            "name":user_data.get("name"),
            "email":user_data.get("email"),
            "password":hashed_password_str
        }

        # Check for exsiting email address
        if db.users.find_one({"email":user['email']}):
            return jsonify({"error":"Email address already exist!"}), 400

        if db.users.insert_one(user) :
            return self.start_session(user)
        return jsonify({"error": "Signup failed"}), 400
    
    def signout(self):
        session.clear()
        return redirect("/")
    
    def verify(self):
        tempText = {
            "message":"User Authorization Success"
        }
        return jsonify(tempText)
    
    def login(self):
        
        user_data = request.json  # Assuming the request contains JSON data
        user = db.users.find_one({
            "email": user_data.get("email")
        })
        if user :
            stored_password = user["password"]
            login_password = user_data.get("password")
            if bcrypt.checkpw(login_password.encode('utf-8'), stored_password.encode('utf-8')):
                access_token = create_access_token(identity=user["email"])
                return jsonify({"access_token": access_token}), 200
                # return {"message": "Login successful"}, 200
            else:
                return {"message": "Invalid password"}, 401

        else:
            return jsonify({"error":"User not found"}),404