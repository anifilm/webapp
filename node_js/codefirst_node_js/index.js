// docker redis-server 설정과 사용 연습
const redis = require('redis');

const client = redis.createClient(6379, 'localhost');

client.on('error', function (err) {
  console.log('Error ' + err);
});

client.set('hello', 'Node.js');

client.get('hello', function (err, val) {
  console.log(val);
  client.quit();
});
