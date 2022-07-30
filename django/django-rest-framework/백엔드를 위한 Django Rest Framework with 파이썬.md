## 백엔드를 위한 Django Rest Framework with 파이썬


# 프로젝트 만들기

$ mkdir 프로젝트명
$ cd 프로젝트명

$ django-admin startproject config .


# 애플리케이션 생성

$ python manage.py startapp myapp


# 기본 테이블 생성

$ python manage.py migrate

# 관리자 계정 생성

$ python manage.py createsuperuser


# 데이터베이스 변경사항 반영

$ python manage.py makemigrations
$ python manage.py migrate


# 프로젝트 시작

$ python manage.py runserver
