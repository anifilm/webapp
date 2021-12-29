import pyrebase

from datetime import datetime
import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class DBModule:
    def __init__(self):
        with open(BASE_DIR + "/auth/firebaseAuth.json") as file:
            config = json.load(file)

        firebase = pyrebase.initialize_app(config)
        self.db = firebase.database()
        print("initialize firebase success...")

    def post_list(self):
        pass

    def post_detail(self, pid):
        pass

    def post_write(self, user, content):
        pass

    # 회원가입 - 이메일 중복 검사
    def email_verification(self, email):
        users = self.db.child("users").get()
        for user in users.each():
            if email in user.val().values():
                return False  # 중복된 이메일이 있다면 False 반환
        return True

    # 회원가입 - 사용자명 중복 검사
    def username_verification(self, username):
        users = self.db.child("users").get()
        for user in users.each():
            if username in user.val().values():
                return False  # 중복된 사용자명이 있다면 False 반환
        return True

    # 회원가입 - DB에 사용자 추가
    def add_user(self, email, username, password):
        reg_date = round(datetime.utcnow().timestamp() * 1000)
        user_data = {
            "email": email,
            "username": username,
            "password": password,
            "reg_date": reg_date,
            "logintime": "",
            "logincount": 0,
        }
        self.db.child("users").push(user_data)

    # 사용자 로그인 - DB에서 해당 email의 사용자 정보 반환
    def get_user_info(self, email):
        users = self.db.child("users").get()
        for user in users.each():
            if email in user.val().values():
                return user.key(), user.val()
        return None
