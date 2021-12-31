const WebSocket = require('ws');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws, req) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('New Client:', ip);
    ws.on('message', (message) => {
      console.log(message);
    });
    ws.on('error', (err) => {
      console.error(err);
    });
    ws.on('close', () => {
      console.log('클라이언트 접속 해제', ip);
      clearInterval(ws.inteval);
    });
    ws.interval = setInterval(() => {
      if (ws.readyState === ws.OPEN) {
        ws.send('Message from Server.');
      }
    }, 3000);
  });
};
