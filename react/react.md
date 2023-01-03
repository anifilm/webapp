# facebook/create-react-app
https://github.com/facebook/create-react-app


# 리액트 create-react-app 설치 (4.0.3 이후 지원 안함)
$ npm install -g create-react-app

# 리액트 프로젝트 생성하기 - 이전 방법
$ create-react-app 프로젝트명

해당 패키지로 인한 오류 발생시 다음 명령을 통해 패키지 삭제

$ npm uninstall -g create-react-app  또는
$ yarn global remove create-react-app

이후 아래 명령 실행시 오류 발생한다면...

$ npx create-react-app@latest 프로젝트명

---------------------------------------------------------------

# 리액트 프로젝트 생성하기 - npx
$ npx create-react-app 프로젝트명

- 타입 스크립트 사용
$ npx create-react-app 프로젝트명 --template typescript

- npm 패키지 매니저 사용
$ npx create-react-app 프로젝트명 --use-npm


# 리액트 프로젝트 생성하기 - npm
$ npm init react-app 프로젝트명

# 리액트 프로젝트 생성하기 - Yarn
$ yarn create react-app 프로젝트명


# 리액트 서버 실행하기
$ yarn start  또는  $ npm start
