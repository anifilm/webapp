from flask import Flask
from dotenv import load_dotenv
import os

from .main.routes import main
from .extensions import mongo

load_dotenv()
user_id = os.getenv('USER_ID')
user_pw = os.getenv('USER_PW')

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "secret"
    app.config['MONGO_URI'] = f'mongodb+srv://{user_id}:{user_pw}@cluster0.yhhud.mongodb.net/flask-web-service-inflearn?retryWrites=true&w=majority'

    mongo.init_app(app)

    app.register_blueprint(main)

    return app
