const insideFn = (logger) =>
  logger('함수를 다른 함수에 인자로 넘길 수도 있습니다.');

insideFn((message) => console.log(message));
