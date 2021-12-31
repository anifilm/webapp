const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const dotenv = require('dotenv');
dotenv.config();

const webSocket = require('./socket.js');

const app = express();

// 포트 설정
const port = process.env.PORT || 8000;
app.set('port', port);

// 공통 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('socketioExample'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'socketioExample',
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

// 라우터 설정
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 404 오류 처리
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 해당 주소가 없습니다.`);
  error.status = 404;
  next(error);
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  res.local.mesage = err.message;
  res.local.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.send('error Occurred');
});

// 서버와 포트 연결
const server = app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});

webSocket(server); // socket.io와 http 포트 공유
