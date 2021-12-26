## Django To Do List App With User Registration & Login


# 프로젝트 생성 및 기본 구성

$ django-admin startproject config .

$ python manage.py startapp todolist


# 개발 서버 실행

$ python manage.py runserver


# 데이터베이스 마이그레이션

$ python manage.py migrate

# 관리자 계정 생성

$ python manage.py createsuperuser


# 데이터베이스 변경사항 반영

$ python manage.py makemigrations
$ python manage.py migrate
