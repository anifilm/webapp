## 파이썬 conda 가상환경 설정


# .bashrc - conda activate 설정
source ~/anaconda3/etc/profile.d/conda.sh
alias activate="conda activate"


# 파이썬 가상 환경 생성 (64bit)

$ conda create --name venv python=3.8


# 파이썬 가상 환경 생성 (32bit)

$ conda create --name py38_32
$ conda activate py38_32
$ conda config --env --set subdir win-32
$ conda install python=3.8

# pywin32 설치

$ conda install -c anaconda pywin32


# 가상 환경 확인

$ conda env list


# 가상 환경 진입 / 해제 (리눅스 맥 콘솔)

$ conda activate py38_32

$ conda deactivate

# 가상 환경 진입 / 해제 (윈도우 커맨드 라인)

> conda activate py38_32

> conda deactivate


# 패키지 관리

$ pip freeze > requirements.txt

$ pip install -r requirements.txt
