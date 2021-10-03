from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def user_juso():
    name = request.args.get("name", "user01")
    address = request.args.get("address", "평택시")

    return name + ": " + address


if __name__ == "__main__":
    app.run()
