from flask import Flask
from flask.views import MethodView

app = Flask(__name__)

class UserView(MethodView):
    def get(self, user_id):
        if user_id is None:
            # return a list of users
            return 'all'
        else:
            # expose a single user
            return 'one'

    def post(self):
        return 'post'

    def put(self, user_id):
        return 'put'

    def delete(self, user_id):
        return 'delete'


user_view = UserView.as_view('users')
app.add_url_rule('/users', defaults={'user_id': None}, view_func=user_view, methods=['GET'])
app.add_url_rule('/users', view_func=user_view, methdos=['POST'])
app.add_url_rule('/users/<int:user_id>', view_func=user_view, methods=['GET', 'PUT', 'DELETE'])
