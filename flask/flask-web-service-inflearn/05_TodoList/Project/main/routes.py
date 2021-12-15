from flask import Blueprint, render_template


main = Blueprint("main", __name__)


@main.route("/")
@main.route("/about")
def home_page():
    return render_template("about.html")
