from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    complete = db.Column(db.Boolean)
    editable = db.Column(db.Boolean)


@app.route("/")
def home():
    # show all todos
    todo_list = Todo.query.all()
    return render_template("base.html", todo_list=todo_list)


@app.route("/add", methods=["POST"])
def add():
    # 아이템 추가
    title = request.form.get("title")
    if title.strip() == "":
        print("작성된 내용이 없습니다.")
    else:
        new_todo = Todo(title=title, complete=False, editable=False)
        db.session.add(new_todo)
        db.session.commit()
    return redirect(url_for("home"))


@app.route("/done/<int:todo_id>")
def done(todo_id):
    # 진행 상태 변경
    todo = Todo.query.filter_by(id=todo_id).first()
    todo.complete = not todo.complete
    db.session.commit()
    return redirect(url_for("home"))


@app.route("/edit/<int:todo_id>")
def edit(todo_id):
    # 아이템 수정
    todo = Todo.query.filter_by(id=todo_id).first()
    todo.editable = not todo.editable
    db.session.commit()
    return redirect(url_for("home"))


@app.route("/edit_complete/<int:todo_id>", methods=["POST"])
def edit_complete(todo_id):
    # 수정 완료
    title = request.form.get("title")
    todo = Todo.query.filter_by(id=todo_id).first()
    todo.editable = not todo.editable
    # 내용이 없거나 수정된 사항이 없다면 home으로 돌아감
    if title.strip() == "" or todo.title == title:
        print("수정된 내용이 없습니다.")
    else:
        todo.title = title.strip()
    db.session.commit()
    return redirect(url_for("home"))


@app.route("/delete/<int:todo_id>")
def delete(todo_id):
    # 아이템 삭제
    todo = Todo.query.filter_by(id=todo_id).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect(url_for("home"))


if __name__ == "__main__":
    db.create_all()

    # db 테스트용 내용 생성
    # new_todo = Todo(title="todo 1", complete=False, editable=False)
    # db.session.add(new_todo)
    # db.session.commit()

    app.run(debug=True)
