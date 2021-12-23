import pyrebase
import json


class DBModule:
    def __init__(self):
        with open("./blog/auth/firebaseAuth.json") as file:
            config = json.load(file)

        self.firebase = pyrebase.initialize_app(config)

    def login(self, id, pwd):
        pass

    def signin(self, id, pwd, name, email):
        pass

    def write_post(self, user, content):
        pass

    def post_list(self):
        pass

    def post_detail(self, pid):
        pass

    def get_user(self, uid):
        pass
