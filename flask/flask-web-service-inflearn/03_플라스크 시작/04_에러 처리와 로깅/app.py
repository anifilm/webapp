from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
@app.route("/user", methods=["GET", "POST"])
def post():
    if request.method == "GET":
        return render_template("index.html")
    elif request.method == "POST":
        value = request.form["input"]
        return render_template("welcome.html", name=value)


@app.route("/test")
def issue():
    return "Test Flask!" + again  # 오류가 발생하는 부분!


@app.errorhandler(404)
def page_not_found(error):
    app.logger.error("Page not found!!!")  # 에러 메시지 남기기 (콘솔에 출력된다.)
    return render_template("page_not_found.html"), 404


if __name__ == "__main__":
    app.run(debug=True)
