import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")

db = {
    "user": DB_USER,
    "password": DB_PASSWORD,
    "host": "localhost",
    "port": 3306,
    "database": "flask_miniter",
}

DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
