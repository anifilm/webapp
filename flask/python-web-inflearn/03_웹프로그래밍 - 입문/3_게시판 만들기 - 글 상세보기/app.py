from flask import Flask, request, render_template, redirect, url_for, abort

import os
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

import time
from datetime import datetime

load_dotenv()
user_id = os.getenv("USER_ID")
user_pw = os.getenv("USER_PW")

app = Flask(__name__)
app.config[
    "MONGO_URI"
] = f"mongodb+srv://{user_id}:{user_pw}@cluster0.yhhud.mongodb.net/flask-board-inflearn?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.template_filter("formatdatetime")
def format_datetime(value):
    if value is None:
        return ""

    now_timestamp = time.time()
    offset = datetime.fromtimestamp(now_timestamp) - datetime.utcfromtimestamp(now_timestamp)
    result = datetime.fromtimestamp(int(value / 1000)) + offset
    return result.strftime("%Y-%m-%d %H:%M:%S")


@app.route("/")
def index():
    return "Hello Flask!"


@app.route("/view/<idx>")
def board_view(idx):
    #idx = request.args.get("idx")

    if idx is not None:
        board = mongo.db.board
        data = board.find_one({"_id": ObjectId(idx)})

        if data is not None:
            result = {
                "id": data.get("_id"),
                "name": data.get("name"),
                "title": data.get("title"),
                "contents": data.get("contents"),
                "created_at": data.get("created_at"),
                "view": data.get("view"),
            }
            return render_template("view.html", result=result)
    return abort(404)


@app.route("/write", methods=["GET", "POST"])
def board_write():
    if request.method == "POST":
        board = mongo.db.board
        name = request.form.get("name")
        title = request.form.get("title")
        contents = request.form.get("contents")
        created_at = round(datetime.utcnow().timestamp() * 1000)

        post = {
            "name": name,
            "title": title,
            "contents": contents,
            "created_at": created_at,
            "view": 0,
        }

        x = board.insert_one(post)
        return redirect(url_for("board_view", idx=x.inserted_id))
    else:
        return render_template("write.html")


if __name__ == "__main__":
    app.run()
