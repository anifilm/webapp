import createError from 'http-errors';
import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//import dotenv from 'dotenv';
//dotenv.config();

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 17장 요청
app.get('/search', function (req, res) {
  console.log(req.query);
  res.end(JSON.stringify(req.query)+'\n');
});

app.get('/params/:role/:name/:status', function (req, res) {
  console.log(req.params);
  console.log(req.route);
  res.end();
});

app.post('/body', function (req, res) {
  console.log(req.body);
  res.end(JSON.stringify(req.body)+'\n');
});

app.post('/upload', function (req, res) {
  console.log(req.files.archive);
  // req.files.archive.path를 읽음
  // 데이터 처리
  // 데이터 저장
  res.end();
});

app.get('/route', function (req, res) {
  console.log(req.route);
  res.end();
});

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
