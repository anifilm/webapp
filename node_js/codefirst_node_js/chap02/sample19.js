// 사용자 정의 함수의 동기 처리

function fakeSetTimeout(callback) {
  callback();
}

console.log(0);

fakeSetTimeout(function () {
  console.log('Hello');
});

console.log(1);
