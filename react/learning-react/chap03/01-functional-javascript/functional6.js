var createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + '!!!');
  };
};

const scream = createScream((message) => console.log(message));

scream('함수가 함수를 반환할 수도 있습니다');
scream('createScream은 함수를 반환합니다');
scream('scream은 createScream이 반환한 함수를 가리킵니다');
