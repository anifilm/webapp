const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// 포트 설정
const port = process.env.PORT || 8080;
app.set('port', port);

// 공통 미들웨어
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser('secret@1234')); // 암호화된 쿠키를 사용하기 위한 임의의 문자 전송
app.use(
  session({
    secret: 'secret@1234', // 암호화
    resave: false, // 새로운 요청시 세션에 변동 사항이 없어도 다시 저장할지 설정
    saveUninitialized: true, // 세션에 저장할 내용이 없어도 저장할지 설정
    cookie: {
      // 세션 쿠기 옵션들 설정 httpOnly, expires, domain, path, secure, sameSite
      httpOnly: true, // 로그인 구현시 필수 적용 자바스크립트로 접근할 수 없게 하는 기능
    },
    //name: 'connect.sid', // 세션 쿠키의 Name 지정 default가 connect.sid
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 설정
app.get('/', (req, res) => {
  let output = '';
  if (req.session.name) {
    output += `
      <h2>로그인한 사용자</h2>
      <p>${req.session.name}님 안녕하세요.</p>
    `;
  } else {
    output += `
      <h2>로그인하지 않은 사용자입니다.</h2>
      <p>로그인해 주세요.</p>
    `;
  }
  res.send(output);
});

// 실제 구현시 post
app.get('/login', (req, res) => {
  console.log(req.session);
  // 쿠키를 사용할 경우 쿠키에 값 설정
  //res.cookie(name, value, options);
  // 세션 쿠기를 사용할 경우
  req.session.name = '로드북';
  res.end('Login ok!');
});

app.get('/logout', (req, res) => {
  res.clearCookie('connect.dis'); // 세션 쿠키 삭제
  res.end('Logout ok!');
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
