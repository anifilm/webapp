import pymongo

person = {
    "이름": "홍길동",
    "나이": 44,
    "거주지": "창원시",
    "키": 170,
    "몸무게": 70,
    "프로필사진": ["a.jpg", "b.jpg"],
}

person2 = {
    "이름": "성춘향",
    "나이": 28,
    "학교": "남원대학교",
    "프로필사진": ["a.jpg", "b.jpg"]
}

conn = pymongo.MongoClient("localhost", 27017)
db = conn.test
col = db.members

#col.insert_one(person)
#col.insert_one(person2)

results = col.find()

for r in results:
    print(r)
