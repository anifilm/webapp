from pathlib import Path

from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect

from apps.config import config

db = SQLAlchemy()  # SQLAlchemy를 인스턴스화한다.
csrf = CSRFProtect()


# create_app 함수를 작성한다.
def create_app(config_key):  # config의 키를 전달한다.
    app = Flask(__name__)  # 플라스크 인스턴스 생성

    # 앱의 config 설정을 한다. (config 구성 이전 설정)
    #app.config.from_mapping(
    #    SECRET_KEY="3RZSMss3p5QPbcY2hBsL",
    #    SQLALCHEMY_DATABASE_URI="sqlite:///" + str(Path(Path(__file__).parent.parent, "local.sqlite")),
    #    SQLALCHEMY_TRACK_MODIFICATIONS=False,
    #    # SQL을 콘솔 로그에 출력하는 설정
    #    SQLALCHEMY_ECHO=True,
    #    WTF_CSRF_SECRET_KEY="FuzzyszU5sugKN7KZs8f",
    #)
    # config_key에 매치하는 환경의 config 클래스를 읽어 들인다.
    app.config.from_object(config[config_key])

    db.init_app(app)  # SQLAlchemy와 앱을 연계한다.
    Migrate(app, db)  # Migrate와 앱을 연계한다.

    csrf.init_app(app)

    # crud 패키지로부터 views를 import한다.
    from apps.crud import views as crud_views

    # register_blueprint를 사용해 views의 crud를 앱에 등록한다.
    app.register_blueprint(crud_views.crud, url_prefix="/crud")

    return app
