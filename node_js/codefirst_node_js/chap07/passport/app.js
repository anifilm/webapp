const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// 포트 설정
const port = process.env.PORT || 8000;
app.set('port', port);

// 더미 사용자 데이터
let fakeUser = {
  username: 'test@test.com',
  password: 'test1234',
};

// 공통 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('passportExample'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'passportExample',
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

// passport 미들웨어
app.use(passport.initialize()); // passport 초기화
app.use(passport.session());    // passport session 연동

// 세션 처리 - 로그인에 성공했을 경우 딱 한번 호출되어 사용자의 식별자를 session에 저장
passport.serializeUser(function (user, done) {
  console.log('serializeUser', user);
  done(null, user.username);
});

// 세션 처리 - 로그인 후 페이지 방문마다 사용자의 실제 데이터 주입
passport.deserializeUser(function (id, done) {
  console.log('deserializeUser', id);
  done(null, fakeUser); // req.user에 전달
});

passport.use(new LocalStrategy(function (username, password, done) {
  if (username === fakeUser.username) {
    if (password === fakeUser.password) {
      return done(null, fakeUser);
    }
    else {
      return done(null, false, { message: 'password incorrect' });
    }
  }
  else {
    return done(null, false, { message: 'username incorrect' });
  }
}));

// 라우터 설정
app.get('/', (req, res) => {
  if (!req.user) { // 로그인을 아직 하지 않았다면
    res.sendFile(__dirname + '/index.html');
  }
  else { // 로그인 성공시 세션에 req.user 저장
    const user = req.user.username;
    const html = `
      <!DOCTYPE html>
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>passport 사용자 인증</title>
        </head>
        <body>
          <p>${user}님 안녕하세요!</p>
          <button onclick="location.href='/logout'">Logout</button>
        </body>
      </html>`;
    res.send(html);
  }
});

// passport Login: strategy-Local
// Authenticate Requests
app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),
  function (req, res) {
    res.send('Login success...');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
})

// 404 오류 처리
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 해당 주소가 없습니다.`);
  error.status = 404;
  next(error);
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'development' ? err : {};
  res.status(err.status || 500);
  res.send('error Occurred');
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
