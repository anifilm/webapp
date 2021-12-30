from flask import Flask, request, render_template, redirect, url_for, flash, session

import time
from datetime import datetime

from DBHander import DBModule


app = Flask(__name__)
app.config["SECRET_KEY"] = "dev"

DB = DBModule()


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
    return render_template("index.html")


@app.route("/list")
def post_list():
    # 작성된 포스트 목록 가져오기
    posts = DB.post_list()
    return render_template("post_list.html", posts=posts)


@app.route("/post/<pid>")
def post_detail(pid):
    # 포스트 상세 정보 가져오기
    post = DB.post_detail(pid)
    return render_template("post_detail.html", post=post)


@app.route("/write", methods=["GET", "POST"])
def post_write():
    if request.method == "POST":
        writer_id = session.get("id")
        username = request.form.get("username")
        title = request.form.get("title")
        content = request.form.get("content")

        # 새로운 포스트 DB에 저장
        DB.post_write(writer_id, username, title, content)

        return redirect(url_for("post_list"))
    else:
        if session.get("id") is not None:
            return render_template("post_write.html")
        else:
            flash("로그인 후 작성할 수 있습니다.")
            return redirect(url_for("user_login"))


@app.route("/signin", methods=["GET", "POST"])
def user_signin():
    if request.method == "POST":
        email = request.form.get("email")
        username = request.form.get("username")
        password = request.form.get("password")
        password_re = request.form.get("password_re")

        if email == "" or username == "" or password == "" or password_re == "":
            flash("입력되지 않은 값이 있습니다.")
            return render_template("signin.html")
        if password != password_re:
            flash("비밀번호가 일치하지 않습니다.")
            return render_template("signin.html")

        # 이메일 중복이 있는지 DB 데이터를 가져와 검증
        if not DB.email_verification(email):
            flash("이미 가입된 이메일 주소입니다.")
            return render_template("signin.html")

        # 사용자명 중복이 있는지 DB 데이터를 가져와 검증
        if not DB.username_verification(username):
            flash("이미 사용중인 사용자명 입니다.")
            return render_template("signin.html")

        # 회원 정보 DB에 저장
        DB.add_user(email, username, password)

        flash("회원 가입이 완료되었습니다.")
        return redirect(url_for("user_login"))
    else:
        if session.get("id") is None:
            return render_template("signin.html")
        else:
            flash("이미 로그인 된 사용자입니다.")
            return redirect(url_for("post_list"))


@app.route("/login", methods=["GET", "POST"])
def user_login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        if email == "":
            flash("이메일 주소를 입력하세요.")
            return redirect(url_for("user_login"))
        if password == "":
            flash("비밀번호를 입력하세요.")
            return redirect(url_for("user_login"))

        # DB에서 회원 정보 가져옴
        result = DB.get_user_info(email)
        if result:
            if password in result[1].values():
                #flash("로그인되었습니다.")
                DB.update_user_login_info(result[0])
                session["id"] = result[0]
                session["email"] = result[1]["email"]
                session["username"] = result[1]["username"]
                session.permanent = True
            else:
                flash("비밀번호가 일치하지 않습니다.")
                return redirect(url_for("user_login"))
        else:
            flash("등록된 회원 정보를 찾을 수 없습니다.")
            return redirect(url_for("user_login"))

        return redirect(url_for("post_list"))
    else:
        if session.get("id") is None:
            return render_template("login.html")
        else:
            flash("이미 로그인 된 사용자입니다.")
            return redirect(url_for("post_list"))


@app.route("/logout")
def user_logout():
    session.pop("id", None)
    session.pop("email", None)
    session.pop("username", None)
    return redirect(url_for("post_list"))


@app.route("/user/<uid>")
def user(uid):
    pass


if __name__ == "__main__":
    app.run()
