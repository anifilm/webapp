from pymongo import MongoClient

connection = MongoClient()

""" 객체 출력 """
print(connection)


""" DB/컬렉션 생성 """
db = connection.Test  # connection["Test"]
print(db)
collection = db.AAA  # db["AAA"]
print(collection)


""" 삽입 """
post = {"name": "user01", "Timeline": "I sometimes cry", "follow": 57}
coll = db.collection
x = coll.insert_one(post)
print(x)

post = [
    {"name": "user02", "Timeline": "I'm user", "follow": 0},
    {"name": "wingard", "Timeline": "I love them", "follow": 200},
    {"name": "in_reason", "Timeline": "Blade of Destruction!", "follow": 1},
]
coll = db.collection
x = coll.insert_many(post)
print(x)


""" 검색 """
x = coll.find_one()
print(x)
x = coll.find_one({"name": "user02"})
print(x)

docs = coll.find()
for doc in docs:
    print(doc)
docs = coll.find().count()
print(docs)
for post in coll.find({"name": "user02"}).sort("_id"):
    print(post)


""" 갱신 """
x = coll.update_one({"name": "user02"}, {"$set": {"Timeline": "I'm not user"}})
print(x)


""" 삭제 """
x = coll.delete_one({"name": "user02"})
print(x)
