import pyrebase
import json

with open("./firebaseAuth.json") as f:
    config = json.load(f)

firebase = pyrebase.initialize_app(config)
db = firebase.database()

signin = {
    #"id": "test",
    "password": "password",
    "username": "js",
}

db.child("users").child("test").set(signin)
