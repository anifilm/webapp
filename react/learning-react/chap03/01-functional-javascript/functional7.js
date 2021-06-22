const createScream = (logger) => (message) =>
  logger(message.toUpperCase() + '!!!');

const scream = createScream((message) => console.log(message));

scream('ES6에서는 더 간편하게 createScream을 만들 수 있습니다.');
