from flask import Blueprint, render_template, redirect, url_for, request

from todoapp.extensions import mongo

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/add', methods=['POST'])
def add_todo():
    todo_item = request.form.get('new-todo')
    todos_collection = mongo.db.todos
    todos_collection.insert_one({'text': todo_item, 'complete': False})
    return redirect(url_for('main.index'))
