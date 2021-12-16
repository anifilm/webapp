import sqlite3

conn = sqlite3.connect("test.db")
cur = conn.cursor()

query = """
    CREATE TABLE IF NOT EXISTS board (
        'idx' INTEGER PRIMARY KEY AUTOINCREMENT,
        'writer' VARCHAR(100),
        'title' VARCHAR(250),
        'contents' TEXT
    )
"""
cur.execute(query)

#query = "INSERT INTO board ('writer', 'title', 'contents') VALUES ('홍길동', '제목', '내용입니다.')"
#cur.execute(query)
#conn.commit()

query = "SELECT * FROM board"
cur.execute(query)

rows = cur.fetchall()

for row in rows:
    print(row)


conn.close()
