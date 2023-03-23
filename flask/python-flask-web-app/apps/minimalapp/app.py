from flask import Flask, current_app, g, render_template, request, url_for

app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, Flaskbook!"


@app.route("/hello/<name>", methods=["GET"], endpoint="hello-endpoint")
def hello(name):
    return f"Hello, {name}!"


@app.route("/name/<name>")
def show_name(name):
    return render_template("index.html", name=name)


"""
Flask2부터는 @app.get("/hello"), @app.post("/hello")라고 기술하는 것이 가능하다.
@app.get("/hello")
@app.post("/hello")
def hello():
    return "Hello, World!"
"""


with app.test_request_context():
    # /
    print(url_for("index"))
    # /hello/world
    print(url_for("hello-endpoint", name="world"))
    # /name/AK?page=1
    print(url_for("show_name", name="AK", page="1"))


# 여기에서 호출하면 오류가 된다.
#print(current_app)

# 어플리케이션 컨텍스트를 취득하여 스택에 push한다.
ctx = app.app_context()
ctx.push()

# current_app에 접근할 수 있게 된다.
print(current_app.name)  # >> apps.minimalapp.app

# 전역 임시 영역에 값을 설정한다.
g.connection = "connection"
print(g.connection)  # >> connection


with app.test_request_context("/users?updated=true"):
    print(request.args.get("updated"))  # true가 출력된다.
