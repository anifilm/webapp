const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');

client.rPush('myKey', 0);
client.rPush('myKey', 1);
client.rPush('myKey', 2);
