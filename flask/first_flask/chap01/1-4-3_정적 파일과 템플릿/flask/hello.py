from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/hello')
def hello():
    return render_template('hello.html')
