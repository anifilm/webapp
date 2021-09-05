from flask import Flask, render_template

app = Flask(__name__)

@app.route('/users')
def user_list():
    users = []
    return render_template('users.html', users=users)
