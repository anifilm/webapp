function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 성공한 경우
      resolve('성공!');
    }, 1000);
  });
}
// 1초 후에 myFunction이 종료되면 , then 처리가 실행됨
myFunction().then((value) => {
  console.log(value); // 성공!
});
