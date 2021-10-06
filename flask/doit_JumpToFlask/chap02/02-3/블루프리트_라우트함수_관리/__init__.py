from flask import Flask
from .views import main_views


def create_app():
    app = Flask(__name__)
    app.register_blueprint(main_views.bp)
    return app
