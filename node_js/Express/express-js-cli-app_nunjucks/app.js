import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import nunjucks from 'nunjucks';

//import dotenv from 'dotenv';
//dotenv.config();

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

// 넌적스 뷰 엔진 설정
app.set('view engine', 'html');
nunjucks.configure('views', {
  autoescape: true,
  express: app, // app 객체 연결
  watch: true,  // HTML 파일이 변경될 때 템플릿 엔진을 다시 렌더링함
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function () {
  console.log(`The server is running, please open your browser at http://localhost:${port}\n`);
});

//export default app;
