const { MongoClient } = require('mongodb');

require('dotenv').config();
const userId = process.env.USER_ID;
const userPw = process.env.USER_PW;

const uri = `mongodb+srv://${userId}:${userPw}@cluster0.nx4ory6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return 'OK';
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
