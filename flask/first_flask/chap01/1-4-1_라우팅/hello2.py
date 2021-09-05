from flask import Flask

app = Flask(__name__)

@app.route('/users/<username>')
def get_user(username):
    return username

@app.route('/posts/<int:post_id>')
def get_post(post_id):
    return str(post_id)

@app.route('/uuid/<uuid:uuid>')
def get_uuid(uuid):
    return str(uuid)
