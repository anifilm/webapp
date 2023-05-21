# 파이썬 venv 가상환경 설정


$ python -m venv venv

# add venv folder to .gitignore

$ echo 'venv' >> .gitignore


# 가상 환경 활성화

$ source ./venv/Scripts/activate

또는 (윈도우 터미널)
> venv\Scripts\activate.bat

# 가상 환경 비활성화

$ deactivate


# 패키지 관리

$ pip freeze > requirements.txt

$ pip install -r requirements.txt
