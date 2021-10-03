from flask import Flask, render_template

app = Flask(__name__)


@app.route("/namelist/<username>/")
def get_profile(username):
    name = username
    return render_template("index.html", name=name)


if __name__ == "__main__":
    app.run()
