from flask import Flask, request, render_template, redirect, url_for
from DB_hander import DBModule

app = Flask(__name__)
DB = DBModule()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/list")
def post_list():
    pass


@app.route("/post/<int:pid>")
def post_detail(pid):
    pass


@app.route("/write", methods=["GET", "POST"])
def post_write():
    pass


@app.route("/write_done", methods=["POST"])
def post_write_done():
    pass


@app.route("/signin")
def user_signin():
    pass


@app.route("/login")
def user_login():
    pass


@app.route("/user/<uid>")
def user(uid):
    pass


if __name__ == "__main__":
    app.run()
