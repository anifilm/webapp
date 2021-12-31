// docker redis-server 설정과 사용 연습
const redis = require('redis');

const client = redis.createClient({
  host: 'localhost',
  port: 6379,
});

client.on('error', (err) => {
  console.log('Error occured while connecting or accessing redis server');
});

if (!client.get('customer_name', redis.print)) {
  //create a new record
  client.set('customer_name', 'John Doe', redis.print);
  console.log('Writing Property : customer_name');
} else {
  let val = client.get('customer_name', redis.print);
  console.log(`Reading property : customer_name - ${val}`);
}
