const redis = require('redis');
const client = redis.createClient(6379, 'localhost');

client.get('myKey', (err, value) => {
  console.log(value);
  client.quit();
});
