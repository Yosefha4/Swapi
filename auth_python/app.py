from flask import Flask, request, jsonify
# from user.models import User
import pymongo

# from user import routes

app = Flask(__name__)
app.secret_key = b'\xf23\x80\xce%\x10\x9b\xa3\xd0mtn\xe3+\xa8\xf7'

#Database
# client = pymongo.MongoClient('localhost',27017)
# db = client.user_login_system

@app.route("/")
def home():
    return "Home Page"


# Import and register user routes
from user.routes import user_bp
app.register_blueprint(user_bp, url_prefix='/user')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
