from flask import Flask, request, render_template

import os
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from datetime import datetime

load_dotenv()
user_id = os.getenv("USER_ID")
user_pw = os.getenv("USER_PW")

app = Flask(__name__)
app.config[
    "MONGO_URI"
] = f"mongodb+srv://{user_id}:{user_pw}@cluster0.yhhud.mongodb.net/flask-board-inflearn?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.route("/")
def index():
    return "Hello Flask!"


@app.route("/write", methods=["GET", "POST"])
def board_write():
    if request.method == "POST":
        name = request.form.get("name")
        title = request.form.get("title")
        contents = request.form.get("contents")

        board = mongo.db.board
        current_utc_time = round(datetime.utcnow().timestamp() * 1000)

        post = {
            "name": name,
            "title": title,
            "contents": contents,
            "created_at": current_utc_time,
            "view": 0,
        }

        board.insert_one(post)
        return ""
    else:
        return render_template("write.html")


if __name__ == "__main__":
    app.run()
