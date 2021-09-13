from flask import Flask

app = Flask(__name__)

@app.route('/v1/users')
def v1_users():
    return 'v1'

@app.route('/v2/users')
def v2_users():
    return 'v2'
