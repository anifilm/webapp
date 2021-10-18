//import createError from 'http-errors';
import express from 'express';
import path from 'path';
import lessMiddleware from 'less-middleware';

import favicon from 'serve-favicon';
import logger from 'morgan';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import csrf from 'csurf';
import errorHandler from 'errorhandler';

import moment from 'moment';

import dotenv from 'dotenv';
dotenv.config();

const userId = process.env.USER_ID;
const userPw = process.env.USER_PW;

import mongoose from 'mongoose';
const db = mongoose
  .connect(
    `mongodb+srv://${userId}:${userPw}@cluster0.ehk3h.mongodb.net/expressTodoApp?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
    },
  )
  .then(() => {
    console.log('MongoDB connecting Success!!');
  })
  .catch((e) => {
    console.log(e);
  });

import routes from './routes';
import tasks from './routes/tasks';

const app = express();

// TODO: mongoskin에서 mongoose로 db관련 수정 필요
//app.use(function (req, res, next) {
//  req.db = {};
//  req.db.tasks = db.collection('tasks');
//  next();
//});
app.locals.appname = 'Express.js Todo App';
app.locals.moment = moment;

const port = process.env.PORT || '3000';
app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join('public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser('CEAF3FA4-F385-49AA-8FE4-54766A9874F1'));
app.use(
  session({
    secret: '59B93087-78BC-4EB9-993A-A61FC844F6C9',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(csrf());

app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.locals._csrf = req.csrfToken();
  return next();
});

//app.param('task_id', function (req, res, next, taskId) {
//  req.db.tasks.findById(taskId, function (error, task) {
//    if (error) return next(error);
//    if (!task) return next(new Error('Task is not found.'));
//    req.task = task;
//    return next();
//  });
//});

app.get('/', routes.index);
app.get('/tasks', tasks.list);
app.post('/tasks', tasks.markAllCompleted)
app.post('/tasks', tasks.add);
app.post('/tasks/:task_id', tasks.markCompleted);
app.delete('/tasks/:task_id', tasks.del);
app.get('/tasks/completed', tasks.completed);

app.all('*', function (req, res) {
  res.status(404).send();
});

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.listen(port, function () {
  console.log(`The serveris running, please open your browser at http://localhost:${port}\n`);
});

//export default app;
