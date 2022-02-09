const messages = [
  '함수를 배열에 넣을 수도 있습니다.',
  (message) => console.log(message),
  '일반적인 값과 마찬가지입니다.',
  (message) => console.log(message),
];

messages[1](messages[0]);
messages[3](messages[2]);
