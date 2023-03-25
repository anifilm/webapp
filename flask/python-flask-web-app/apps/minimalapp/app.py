from email_validator import EmailNotValidError, validate_email
from flask import (Flask, current_app, flash, g, redirect, render_template,
                   request, url_for)

# Flask 클래스를 인스턴스화한다
app = Flask(__name__)

# SECRET_KEY를 추가한다
app.config["SECRET_KEY"] = "3RZSMss3p5QPbcY2hBsL"


@app.route("/")
def index():
    return "Hello, Flaskbook!"


@app.route("/hello/<name>", methods=["GET"], endpoint="hello-endpoint")
def hello(name):
    return f"Hello, {name}!"


@app.route("/name/<name>")
def show_name(name):
    return render_template("index.html", name=name)


"""
Flask2부터는 @app.get("/hello"), @app.post("/hello")라고 기술하는 것이 가능하다.
@app.get("/hello")
@app.post("/hello")
def hello():
    return "Hello, World!"
"""


with app.test_request_context():
    # /
    print(url_for("index"))
    # /hello/world
    print(url_for("hello-endpoint", name="world"))
    # /name/AK?page=1
    print(url_for("show_name", name="AK", page="1"))


# 여기에서 호출하면 오류가 된다.
#print(current_app)

# 어플리케이션 컨텍스트를 취득하여 스택에 push한다.
ctx = app.app_context()
ctx.push()

# current_app에 접근할 수 있게 된다.
print(current_app.name)  # >> apps.minimalapp.app

# 전역 임시 영역에 값을 설정한다.
g.connection = "connection"
print(g.connection)  # >> connection


with app.test_request_context("/users?updated=true"):
    print(request.args.get("updated"))  # true가 출력된다.


@app.route("/contact")
def contact():
    return render_template("contact.html")  # 해당 페이지를 표시


@app.route("/contact/complete", methods=["GET", "POST"])
def contact_complete():
    if request.method == "POST":
        # form 속성을 사용해서 폼의 값을 취득한다.
        username = request.form["username"]
        email = request.form["email"]
        description = request.form["description"]

        # 입력 체크
        is_valid = True

        if not username:
            flash("사용자명은 필수입니다.")
            is_valid = False

        if not email:
            flash("메일 주소는 필수입니다.")
            is_valid = False

        try:
            validate_email(email)
        except EmailNotValidError:
            flash("메일 주소의 형식으로 입력해 주세요.")
            is_valid = False

        if not description:
            flash("문의 내용은 필수입니다.")
            is_valid = False

        if not is_valid:
            return redirect(url_for("contact"))  # redirect -> http://127.0.0.1:5000/contact

        # 이메일을 보낸다. (나중에 구현할 부분)

        flash("문의해 주셔서 감사합니다.")

        # contact 엔드포인트(해당 경로)로 리다이렉트 한다.
        # (venv) $ flask routes
        # EndPoint           Methods    Rule
        # contact            GET        /contact
        # contact_complete   GET,POST   /contact/complete
        return redirect(url_for("contact_complete"))  # redirect -> http://127.0.0.1:5000/contact/complete

    return render_template("contact_complete.html")  # 해당 페이지를 표시
