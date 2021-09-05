from flask import Flask, render_template
from flask.views import View

app = Flask(__name__)

class UserList(View):
    methdos = ['GET', 'POST']

    def dispatch_request(self):
        users = []
        return render_template('users.html', users=users)


app.add_url_rule('/users', view_func=UserList.as_view('user_list'))
