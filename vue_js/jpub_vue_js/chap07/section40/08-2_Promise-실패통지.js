function myFunction(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve('성공!');
    } else {
      reject('에러!');
    }
  });
}

myFunction(100).catch((value) => {
  console.log(value); // 에러!
});
