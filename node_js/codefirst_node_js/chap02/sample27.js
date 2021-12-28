// Promise의 .catch()의 이용

function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error!');
    }, sec * 1000);
  });
}

wait(3).catch((e) => {
  console.log('1st catch ', e);
});

// chain은 같은 객체를 리턴할 때만 가능하다.
wait(3)
  .catch((e) => {
    console.log('1st catch ', e);
  }) // wait함수의 에러를 받음
  .catch((e) => {
    console.log('1st catch ', e);
  }); // 위 catch 구문의 상태를 받음. 에러를 잘 받았으므로 에러가 발생하지 X

// chain을 하고 싶을 땐.
wait(3)
  .catch((e) => {
    console.log('1st catch ', e);
    throw e;
  })
  .catch((e) => {
    console.log('1st catch ', e);
  });

// Promise의 .then() 이용

wait(3).then(
  () => {
    console.log('Success'); // 성공했을 경우
  },
  (e) => {
    console.log('Catch in Then', e); // 실패했을 경우
  }
);
