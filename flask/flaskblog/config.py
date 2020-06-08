import os


class Config:
    SECRET_KEY = '51b9d7147ff9d7e76a3d47ac5d0ecd48'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = 'anifilm02.develop@gmail.com'
    MAIL_PASSWORD = '7ke68nw2!1'