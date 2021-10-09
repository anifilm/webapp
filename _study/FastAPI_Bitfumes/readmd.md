# 파이썬 가상환경 생성

$ python -m venv venv

## add venv folder to .gitignore

$ echo 'venv' >> .gitignore


# 가상 환경 활성화

$ source ./venv/Scripts/activate

## 가상 환경 비활성화

$ deactivate


# 가상 환경에 패키지 설치

$ pip install -r requirements.txt

## 가상 환경 패키지 정보 freeze

$ pip freeze > requirements.txt
