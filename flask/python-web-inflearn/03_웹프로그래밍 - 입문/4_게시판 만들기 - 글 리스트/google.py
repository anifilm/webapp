"""
게시판 리스트 테스트를 위한 Google 검색어 크롤링 프로그램

설치 해야하는 라이브러리
pip install BeautifulSoup4 requests lxml pymongo
"""
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import random

import pymongo

import os
from dotenv import load_dotenv

load_dotenv()
user_id = os.getenv("USER_ID")
user_pw = os.getenv("USER_PW")

# 몽고DB
conn_str = f"mongodb+srv://{user_id}:{user_pw}@cluster0.yhhud.mongodb.net/flask-board-inflearn?retryWrites=true&w=majority"
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)

try:
    print(client.server_info())
except Exception:
    print("Unable to connect to the server.")

# myweb 데이터베이스
db = client['flask-board-inflearn']
# board 컬렉션
col = db.board

# 구글 검색시 헤더값을 설저하지 않으면 브라우저에서 보이는것과 다른 결과가 나옴
header = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36"
}

# 검색 결과의 5페이지까지만 수집
for i in range(6):
    # 구글 검색 URL, 검색어는 파이썬
    url = "https://www.google.com/search?q={}&start={}".format("파이썬", i * 10)
    # url 접속
    r = requests.get(url, headers=header)

    # 웹페이지의 검색 결과를 파싱하기 위한 준비
    # lxml 라이브러리 사용(설치 요망)
    bs = BeautifulSoup(r.text, "lxml")

    # 검색 결과는 div 태그의 g 클래스 단위로 반복됨
    lists = bs.select("div.g")

    # 검색결과 루프
    for li in lists:
        # 게시물 작성시간 기록을 위해 현재시간 저장 (utc 타임)
        current_utc_time = round(datetime.utcnow().timestamp() * 1000)

        try:
            # 검색 결과의 제목은 h3 태그의 LC20lb 클래스에 있음
            title = li.select_one("h3.LC20lb").text

            # 검색결과의 요약내용은 div 태그의 s 클래스에 있음
            contents = li.select_one("div.IsZvec").text

            print(title)
            print(contents)

            try:
                # 몽고DB에 저장
                # 작성자와 writer_id 설정 필요
                col.insert_one(
                    {
                        #"writer_id": "",
                        "name": "테스터",
                        "title": title,
                        "contents": contents,
                        "created_at": current_utc_time,
                        "view": random.randrange(30, 777),
                    }
                )
            except:
                print('저장 중 오류 발생!')
                pass

        except:
            print('크롤링 중 오류 발생!')
            pass
