from main import request, redirect, url_for, flash, session
from functools import wraps


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("id") is None or session.get("id") == "":
            flash("로그인 후 사용 가능한 기능입니다.")
            return redirect(url_for("member.member_login", next_url=request.url))
        return f(*args, **kwargs)

    return decorated_function
