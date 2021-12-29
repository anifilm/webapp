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
        posts = []
        get_posts = self.db.child("posts").get()
        for post in get_posts.each():
            post.val()["id"] = post.key()
            posts.append(post.val())
        posts.reverse()
        return posts

    def post_detail(self, pid):
        # TODO 해당 글의 view 카운트 증가
        get_post = self.db.child("posts").get().val()[pid]
        return get_post

    def post_write(self, writer_id, username, title, content):
        reg_date = round(datetime.utcnow().timestamp() * 1000)
        post_data = {
            "writer_id": writer_id,
            "username": username,
            "title": title,
            "content": content,
            "created_at": reg_date,
            "view": 0,
        }
        self.db.child("posts").push(post_data)

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
