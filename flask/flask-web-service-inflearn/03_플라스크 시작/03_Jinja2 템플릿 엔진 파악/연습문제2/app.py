from flask import Flask, render_template, redirect, request, url_for

app = Flask(__name__)


@app.route("/")
@app.route("/<int:num>")
def inputTest(num=None):
    return render_template("index.html", num=num)


@app.route("/calculate", methods=["POST"])
def calculate(num=None):
    if request.method == "POST":
        temp = request.form["num"]
        if temp == "":  # 빈 값인 경우 None을 할당
            temp = None
    else:
        temp = None
    return redirect(url_for("inputTest", num=temp))


if __name__ == "__main__":
    app.run()
