from flask import Blueprint, render_template, request, redirect, url_for

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

from bson.objectid import ObjectId
from datetime import datetime

from Project.extensions import mongo


class TextForm(FlaskForm):
    content = StringField("내용", validators=[DataRequired()])


main = Blueprint("main", __name__)

# Error Process
@main.errorhandler(404)
def page_not_found(error):
    return render_template("page_not.html"), 404


# Home page
@main.route("/")
@main.route("/about")
def home_page():
    return render_template("about.html")


# Show All list page
@main.route("/all")
def all_page():
    stat = "All list"
    todos = mongo.db.todolist
    todolist = todos.find().sort("date", -1)
    form = TextForm()
    return render_template("index.html", todos=todolist, stat=stat, form=form)


# Show Active item list
@main.route("/active")
def active_page():
    stat = "Active list"
    todos = mongo.db.todolist
    todolist = todos.find({"done": "no"}).sort("date", -1)
    form = TextForm()
    return render_template("index.html", todos=todolist, stat=stat, form=form)


# Show Completed item list
@main.route("/completed")
def complete_page():
    stat = "Completed list"
    todos = mongo.db.todolist
    todolist = todos.find({"done": "yes"}).sort("date", -1)
    form = TextForm()
    return render_template("index.html", todos=todolist, stat=stat, form=form)


# Update memo
@main.route("/update")
def update_page():
    todos = mongo.db.todolist
    id = request.values.get("_id")
    task = todos.find({"_id": ObjectId(id)})[0]
    form = TextForm()
    return render_template("update.html", task=task, form=form)


# Add new memo
@main.route("/action", methods=["GET", "POST"])
def action_add():
    todos = mongo.db.todolist
    form = TextForm()
    if form.validate_on_submit():
        contents = request.form["content"]
        date = datetime.today()
        primary = request.values.get("primary")
        todos.insert_one(
            {"contents": contents, "date": date, "primary": primary, "done": "no"}
        )
        return """<script>
                    window.location = document.referrer;
                  </script>"""
    else:
        return render_template("page_not.html")


# Done memo change
@main.route("/done")
def done_add():
    todos = mongo.db.todolist
    id = request.values.get("_id")
    task = todos.find({"_id": ObjectId(id)})
    if task[0]["done"] == "yes":
        todos.update_one({"_id": ObjectId(id)}, {"$set": {"done": "no"}})
    else:
        todos.update_one({"_id": ObjectId(id)}, {"$set": {"done": "yes"}})
    return """<script>
                window.location = document.referrer;
              </script>"""


# Delete memo
@main.route("/delete")
def action_delete():
    todos = mongo.db.todolist
    key = request.values.get("_id")
    todos.delete_one({"_id": ObjectId(key)})
    return """<script>
                window.location = document.referrer;
              </script>"""


# Done memo update
@main.route("/action2", methods=["GET", "POST"])
def done_update():
    todos = mongo.db.todolist
    if request.method == "POST":
        key = request.values.get("_id")
        contents = request.form["content"]
        primary = request.values.get("primary")
        todos.update_one(
            {"_id": ObjectId(key)}, {"$set": {"contents": contents, "primary": primary}}
        )
        return redirect(url_for("main.all_page"))
    else:
        return render_template("page_not.html")
