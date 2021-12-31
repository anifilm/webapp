const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const socket = require('socket.io');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const hbs = require('hbs');

const dotenv = require('dotenv');
dotenv.config();

const Post = require('./models/Post');
const User = require('./models/User');

const app = express();
app.use(express.static(__dirname + '/public'));

const onlineChatUsers = {};

// 포트 설정
const port = process.env.PORT || 8000;
app.set('port', port);

// 템플릿 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// 공통 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(flash());

// passport 미들웨어
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/facebook_clone', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(err);
  });

// 템플릿 파일에 변수 전송
app.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.login = req.isAuthenticated();
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

// 라우터 설정
app.use('/', userRoutes);
app.use('/', postRoutes);

const server = app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});

// WebSocket 설정
const io = socket(server);

const room = io.of('/chat');
room.on('connection', (socket) => {
  console.log('new User:', socket.id);

  room.emit('userUser', { socketId: socket.id });

  socket.on('newUser', (data) => {
    if (!(data.name in onlineChatUsers)) {
      onlineChatUsers[data.name] = data.socketId;
      room.emit('updateUserList', Object.keys(onlineChatUsers));
      console.log('Online users:', Object.keys(onlineChatUsers));
    }
  });

  socket.on('disconnect', () => {
    delete onlineChatUsers[socket.name];
    room.emit('updateUserList', Object.keys(onlineChatUsers));
    console.log(`user ${socket.name} disconnected`);
  });

  socket.on('chat', (data) => {
    console.log(data);
    if (data.to === 'Global Chat') {
      room.emit('chat', data);
    }
    else if (data.to) {
      room.to(onlineChatUsers[data.name]).emit('chat', data);
      room.to(onlineChatUsers[data.to]).emit('chat', data);
    }
  });
});
