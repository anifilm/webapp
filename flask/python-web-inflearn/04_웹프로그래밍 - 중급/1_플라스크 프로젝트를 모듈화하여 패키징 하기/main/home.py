from main import *


@app.route("/")
def index():
    return redirect(url_for("lists"))
