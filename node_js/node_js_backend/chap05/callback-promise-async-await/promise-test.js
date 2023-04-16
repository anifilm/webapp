const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => { // 콜백 대신 Promise 객체 반환
    if (DB.length > oldDBSize) {
      resolve(user); // 성공 시 유저 정보 반환
    } else {
      reject(new Error('Save DB Error!')); // 실패 시 에러 발생
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => { // Promise 객체를 반환. 실패 처리 없음
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => { // Promise 객체 반환
    resolve(`success register ${user.name}`); // 성공 시 성공 메시지와 유저명 반환
  });
}

function registerByPromise(user) { // 비동기 호출이지만, 순서를 지켜서 실행
  const result = saveDB(user).then(sendEmail).then(getResult);
  // 아직 완료되지 않았으므로 지연(pending) 상태
  console.log(result);
  return result;
}

const myUser = { email: 'andy@test.com', password: '1234', name: 'andy' };
const result = registerByPromise(myUser);
// 결과값이 Promise이므로 then() 메서드에 함수를 넣어서 결과값을 볼 수 있음
result.then(console.log);
