// 콜백 함수의 동기 처리

setTimeout(() => {
  setTimeout(() => {
    console.log('todo: Second work!');
  }, 2000);
  console.log('todo: First work!');
}, 3000);
