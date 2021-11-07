import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_EXP_DELTA_SECONDS = 7 * 24 * 60 * 60

db = {
    "user": DB_USER,
    "password": DB_PASSWORD,
    "host": "localhost",
    "port": 3306,
    "database": "flask_miniter",
}

DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"

test_db = {
    "user": DB_USER,
    "password": DB_PASSWORD,
    "host": "localhost",
    "port": 3306,
    "database": "flask_miniter_test",
}

test_config = {
    "DB_URL": f"mysql+mysqlconnector://{test_db['user']}:{test_db['password']}@{test_db['host']}:{test_db['port']}/{test_db['database']}?charset=utf8",
    "JWT_SECRET_KEY": JWT_SECRET_KEY,
    "JWT_EXP_DELTA_SECONDS": JWT_EXP_DELTA_SECONDS,
}
