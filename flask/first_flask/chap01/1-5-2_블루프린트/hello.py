from flask import Flask

from v1 import app as v1_app
from v2 import app as v2_app

app = Flask(__name__)

app.register_blueprint(v1_app)
app.register_blueprint(v2_app)
