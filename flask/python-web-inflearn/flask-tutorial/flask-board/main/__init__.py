from flask import (
    Flask,
    request,
    render_template,
    redirect,
    url_for,
    abort,
    flash,
    session,
)

import os
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

import math
import time
from datetime import datetime, timedelta

load_dotenv()
user_id = os.getenv("USER_ID")
user_pw = os.getenv("USER_PW")

app = Flask(__name__)
app.config["SECRET_KEY"] = "dev"
app.config["PERMENENT_SESSION_LIFETIME"] = timedelta(minutes=60)
app.config[
    "MONGO_URI"
] = f"mongodb+srv://{user_id}:{user_pw}@cluster0.yhhud.mongodb.net/flask-board-inflearn?retryWrites=true&w=majority"
mongo = PyMongo(app)

from .common import login_required
from .filter import format_datetime
from . import home
from . import member
from . import board

app.register_blueprint(home.blueprint)
app.register_blueprint(member.blueprint)
app.register_blueprint(board.blueprint)
