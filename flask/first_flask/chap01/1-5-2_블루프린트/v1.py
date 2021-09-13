from flask import Blueprint

app = Blueprint('v1', __name__, url_prefix='/v1')

@app.route('/users')
def users():
    return 'v1'

@app.route('/users/<int:user_id>')
def get_user(user_id):
    return str(user_id)
