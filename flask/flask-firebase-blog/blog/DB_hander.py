import pyrebase
import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class DBModule:
    def __init__(self):
        with open(BASE_DIR + "/auth/firebaseAuth.json") as file:
            config = json.load(file)

        self.firebase = pyrebase.initialize_app(config)
        print("initialize firebase success...")

    def post_list(self):
        pass

    def post_detail(self, pid):
        pass

    def post_write(self, user, content):
        pass

    def signin(self, id, pwd, name, email):
        pass

    def login(self, id, pwd):
        pass

    def get_user(self, uid):
        pass
