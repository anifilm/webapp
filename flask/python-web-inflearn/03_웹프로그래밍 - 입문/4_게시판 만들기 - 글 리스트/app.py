from flask import Flask, request, render_template, redirect, url_for, abort

import os
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

import math
import time
from datetime import datetime

load_dotenv()
user_id = os.getenv("USER_ID")
user_pw = os.getenv("USER_PW")

app = Flask(__name__)
app.config[
    "MONGO_URI"
] = f"mongodb+srv://{user_id}:{user_pw}@cluster0.yhhud.mongodb.net/flask-board-inflearn?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.template_filter("formatdatetime")
def format_datetime(value):
    if value is None:
        return ""

    now_timestamp = time.time()
    offset = datetime.fromtimestamp(now_timestamp) - datetime.utcfromtimestamp(
        now_timestamp
    )
    result = datetime.fromtimestamp(int(value / 1000)) + offset
    return result.strftime("%Y-%m-%d %H:%M:%S")


@app.route("/")
def index():
    return "Hello Flask!"


@app.route("/list")
def lists():
    # 페이지 값 (값이 없는 경우 기본값은 1)
    page = request.args.get("page", default=1, type=int)
    # 한 페이지당 몇 개의 게시물을 출력할 지
    limit = request.args.get("limit", 10, type=int)

    search = request.args.get("search", -1, type=int)
    keyword = request.args.get("keyword", type=str)

    # 최종적으로 완성된 퀴리를 만들 변수
    query = {}
    # 검색어 상태를 추가할 리스트 변수
    search_list = []

    if search == 0:
        search_list.append({"title": {"$regex": keyword}})
    elif search == 1:
        search_list.append({"contents": {"$regex": keyword}})
    elif search == 2:
        search_list.append({"title": {"$regex": keyword}})
        search_list.append({"contents": {"$regex": keyword}})
    elif search == 3:
        search_list.append({"name": {"$regex": keyword}})
    # 검색 대상이 한개라도 존재할 경우 query 변수에 $or 리스트를 쿼리한다.
    if len(search_list) > 0:
        query = {"$or": search_list}

    board = mongo.db.board
    # 게시물 내림차순 정렬 내용 추가 .sort("_id", -1)
    datas = board.find(query).sort("_id", -1).skip((page - 1) * limit).limit(limit)

    # 게시물의 총 개수
    total_count = board.find(query).count()
    # 마지막 페이지의 수
    last_page_num = math.ceil(total_count / limit)

    # 페이지 블럭을 5개씩 표기
    block_size = 5
    # 현재 블럭의 위치
    block_num = int((page - 1) / block_size)
    # 블럭의 시작 위치
    block_start = int((block_size * block_num) + 1)
    # 블럭의 끝 위치
    block_last = math.ceil(block_start + (block_size - 1))

    return render_template(
        "list.html",
        datas=datas,
        total=total_count,
        limit=limit,
        page=page,
        block_start=block_start,
        block_last=block_last,
        last_page_num=last_page_num,
        search=search,
        keyword=keyword,
    )


@app.route("/view/<idx>")
def board_view(idx):
    # idx = request.args.get("idx")

    if idx is not None:
        page = request.args.get("page")
        search = request.args.get("search")
        keyword = request.args.get("keyword")

        board = mongo.db.board
        data = board.find_one({"_id": ObjectId(idx)})

        if data is not None:
            result = {
                "id": data.get("_id"),
                "name": data.get("name"),
                "title": data.get("title"),
                "contents": data.get("contents"),
                "created_at": data.get("created_at"),
                "view": data.get("view"),
            }
            return render_template(
                "view.html", result=result, page=page, search=search, keyword=keyword
            )
    return abort(404)


@app.route("/write", methods=["GET", "POST"])
def board_write():
    if request.method == "POST":
        board = mongo.db.board
        name = request.form.get("name")
        title = request.form.get("title")
        contents = request.form.get("contents")
        created_at = round(datetime.utcnow().timestamp() * 1000)

        post = {
            "name": name,
            "title": title,
            "contents": contents,
            "created_at": created_at,
            "view": 0,
        }

        x = board.insert_one(post)
        return redirect(url_for("board_view", idx=x.inserted_id))
    else:
        return render_template("write.html")


if __name__ == "__main__":
    app.run()
