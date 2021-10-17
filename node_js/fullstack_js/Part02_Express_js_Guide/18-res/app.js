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

// 핸들바 뷰 엔진 설정
app.engine(
  'hbs',
  expressHandlebars({
    defaultLayout: 'layout',
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 18장 응답
app.get('/render', function (req, res) {
  res.render('render');
});

app.get('/render-title', function (req, res) {
  res.render('index', { title: 'Express.js Guide' });
});

app.get('/locals', function (req, res) {
  res.locals = { title: 'Express.js Guide' };
  res.render('index');
});

app.get('/set-html', function (req, res) {
  // 코드
  res.set('Content-Type', 'text/html');
  res.end(`
    <html>
    <body>
      <h1>Express.js Guide</h1>
    </body>
    </html>
  `);
});

app.get('/set-csv', function (req, res) {
  const body = `title tags
Express Guide, node.js express.js
Repid Prototyping with JS, backbone.js, node.js, mongodb
JavaScript: The Good Parts, javascript
`;
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': body.length,
    'Set-Cookie': ['type=reader', 'language=javascript'],
  });
  res.end(body);
});

app.get('/status', function (req, res) {
  res.status(200).send('alive');
});

app.get('/send-ok', function (req, res) {
  //res.send(200, { message: 'Data was submitted successfully.' });
  res.status(200).send({ message: 'Data was submitted successfully.' });
});

app.get('/send-err', function (req, res) {
  //res.send(500, { message: 'Opps, the server is down.' });
  res.status(500).send({ message: 'Opps, the server is down.' });
});

app.get('/send-buf', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(new Buffer('CSV data in text format'));
});

app.get('/json', function (req, res) {
  res.status(200).json([
    { title: 'Express.js Guide', tags: 'node.js, express.js' },
    { title: 'Rapid Prototyping with JS', tags: 'backbone.js, node.js, mongodb' },
    { title: 'JavaScript: The Good Parts', tags: 'javascript' },
  ]);
});

app.get('/jsonp', function (req, res) {
  res.status(200).jsonp([
    { title: 'Express.js Guide', tags: 'node.js, express.js' },
    { title: 'Rapid Prototyping with JS', tags: 'backbone.js, node.js, mongodb' },
    { title: 'JavaScript: The Good Parts', tags: 'javascript' },
  ]);
});

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
  console.log(`The serveris running, please open your browser at http://localhost:${port}\n`);
});

//export default app;
