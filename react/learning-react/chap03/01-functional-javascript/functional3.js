const obj = {
  message: '함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.',
  log(message) {
    console.log(message);
  },
};

obj.log(obj.message);
