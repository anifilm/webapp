const { MongoClient } = require('mongodb');

require('dotenv').config();
const userId = process.env.USER_ID;
const userPw = process.env.USER_PW;

// 몽고디비 연결 주소
const uri = `mongodb+srv://${userId}:${userPw}@cluster0.nx4ory6.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = function (callback) { // 몽고디비 커넥션 연결 함수 반환
  return MongoClient.connect(uri, callback);
}
