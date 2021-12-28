// async/await의 사용

function workP(sec) {
  // promise의 인스턴스를 리턴하고 then에서 리턴한 것을 받는다.
  return new Promise((resolve, reject) => {
    // Promise 생성시 넘기는 callback = resolve, reject
    // resolve 동작 완료시 호출, 에러 났을 경우 reject
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

async function asyncFunc() {
  const result_workP = await workP(3);
  console.log(result_workP);
  return 'async function';
}

asyncFunc().then((result) => {
  console.log(result);
});
