const SocketIO = require('socket.io');

module.exports = (server) => {
  const io = SocketIO(server, { path: '/socket.io' });
  // index.js의 path와 동일하게
  io.on('connection', (socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`New Client: ${ip}, socket.id: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`Client Out: ${ip}, socket.id: ${socket.id}`);
      clearInterval(socket.interval);
    });
    socket.on('error', (error) => {
      console.error(error);
    });
    socket.on('from client', (data) => {
      console.log(data);
    });

    socket.interval = setInterval(() => { // send 대신 emit으로 메세지를 보냄
      socket.emit('from server', 'Message from Server.');
    }, 3000);
  });
}
