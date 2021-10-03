from flask import Flask, render_template

app = Flask(__name__)


@app.route("/<username>")
def get_page(username):
    length = len(username)
    return render_template("index.html", name=username, leng=length)


if __name__ == "__main__":
    app.run()
