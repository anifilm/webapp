from flask import Blueprint

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/hello')
def hello_world():
    return 'Hello, world!'

@bp.route('/')
def index():
    return 'index'

# Route, Controller 역할을 동시에 수행한다.
