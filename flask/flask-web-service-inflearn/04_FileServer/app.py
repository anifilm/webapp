from flask import Flask, render_template, request, redirect, url_for

from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"


class FileForm(FlaskForm):
    files = FileField(validators=[FileRequired("업로드할 파일을 넣어주세요.")])


@app.route("/", methods=["GET", "POST"])
def upload_page():
    form = FileForm()
    if form.validate_on_submit():
        f = form.files.data
        f.save("./uploads/" + secure_filename(f.filename))
        return render_template("check.html")
    return render_template("upload.html", form=form)


if __name__ == "__main__":
    app.run()
