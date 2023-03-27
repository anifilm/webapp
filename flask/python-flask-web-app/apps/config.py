from pathlib import Path

basedir = Path(__file__).parent.parent


# BaseConfig 클래스 작성한다.
class BaseConfig:
    SECRET_KEY = "3RZSMss3p5QPbcY2hBsL"
    WTF_CSRF_SECRET_KEY = "FuzzyszU5sugKN7KZs8f"
    # 이미지 업로드 경로에 apps/images를 지정한다.
    UPLOAD_FOLDER = str(Path(basedir, "apps", "images"))
    LABELS = []

# BaseConfig 클래스를 상속하여 LocalConfig 클래스를 작성한다.
class LocalConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{basedir / 'local.sqlite'}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQL을 콘솔 로그에 출력하는 설정
    SQLALCHEMY_ECHO = True


# BaseConfig 클래스를 상속하여 TestingConfig 클래스를 작성한다.
class TestingConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{basedir / 'testing.sqlite'}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    WTF_CSRF_ENABLED = False


# config 사전에 매핑한다.
config = {
    "testing": TestingConfig,
    "local": LocalConfig,
}
