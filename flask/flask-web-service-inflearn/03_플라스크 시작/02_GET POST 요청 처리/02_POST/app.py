from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def hello():
    return render_template("index.html")


@app.route("/post", methods=["POST"])
def post():
    value = request.form["input"]
    message = "%s님 환영합니다." % value
    return message


if __name__ == "__main__":
    app.run()
