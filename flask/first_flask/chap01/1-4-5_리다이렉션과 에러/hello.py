from flask import Flask, redirect, url_for, abort

app = Flask(__name__)

@app.errorhandler(403)
def permission_denied(error):
    return '403', 403

@app.route('/')
def index():
    return redirect(url_for('user_list'))

@app.route('/users')
def user_list():
    abort(403)
