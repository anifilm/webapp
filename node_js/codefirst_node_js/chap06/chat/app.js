const http = require('http');
const express = require('express');

const app = express();
app.use(express.static(__dirname));

const server = http.Server(app);
const io = require('socket.io')(server);
let users = [];

server.listen(8080, () => {
  console.log('8080포트에서 서버 실행중...');
});

// 라우터 설정
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  let name = '';
  socket.on('has connected', (username) => {
    name = username;
    users.push(username);
    io.emit('has connected', { username: username, usersList: users });
  });

  socket.on('has disconnected', () => {
    users.splice(users.indexOf(name), 1);
    io.emit('has disconnected', { username: name, usersList: users });
  });

  socket.on('new message', (data) => {
    io.emit('new message', data);
  });
});
