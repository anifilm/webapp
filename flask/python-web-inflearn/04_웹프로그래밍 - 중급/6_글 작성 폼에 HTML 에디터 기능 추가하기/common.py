from main import request, redirect, url_for, flash, session
from main import ALLOWED_EXTENSIONS
from functools import wraps

from string import digits, ascii_uppercase, ascii_lowercase
import random


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("id") is None or session.get("id") == "":
            flash("로그인 후 사용 가능한 기능입니다.")
            return redirect(url_for("member.member_login", next_url=request.url))
        return f(*args, **kwargs)

    return decorated_function


# 파일 확장자 검증
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1] in ALLOWED_EXTENSIONS


# 랜덤한 파일명 생성
def random_generator(length=12):
    char = ascii_lowercase + ascii_uppercase + digits
    return "".join(random.sample(char, length))
