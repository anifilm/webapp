from flask import Flask, render_template, send_file

from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired
from werkzeug.utils import secure_filename

import os
import datetime

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"


class FileForm(FlaskForm):
    files = FileField(validators=[FileRequired("업로드할 파일을 넣어주세요.")])


def stamp2real(stamp):
    return datetime.datetime.fromtimestamp(stamp)


def info(filename):
    ctime = os.path.getctime(filename)  # 만든시간
    mtime = os.path.getmtime(filename)  # 수정시간
    size = os.path.getsize(filename)  # 파일크기 (단위: bytes)
    return ctime, mtime, size


@app.errorhandler(404)
def page_not_found(error):
    return render_template("deny.html", pwd=os.getcwd() + "\\uploads"), 404


@app.route("/", methods=["GET", "POST"])
def main_page():
    form = FileForm()
    if form.validate_on_submit():
        f = form.files.data
        f.save("./uploads/" + secure_filename(f.filename))
        return render_template("check.html", pwd=os.getcwd() + "\\uploads")

    filelist = os.listdir("./uploads")
    infos = []

    for name in filelist:
        fileinfo = {}
        ctime, mtime, size = info("./uploads/" + name)
        fileinfo["name"] = name
        fileinfo["create"] = stamp2real(ctime)
        fileinfo["modify"] = stamp2real(mtime)
        if size <= 1000000:
            fileinfo["size"] = "%.2f KB" % (size / 1024)
        else:
            fileinfo["size"] = "%.2f MB" % (size / (1024.0 * 1024.0))
        infos.append(fileinfo)

    return render_template(
        "home.html", form=form, pwd=os.getcwd() + "\\uploads", infos=infos
    )


@app.route("/down/<path:filename>")
def down_page(filename):
    return send_file(
        "uploads/" + filename, attachment_filename=filename, as_attachment=True
    )


@app.route("/del/<path:filename>")
def delete_page(filename):
    os.remove("uploads/" + filename)
    return '<script>location.href = "/";</script>'


if __name__ == "__main__":
    app.run()
