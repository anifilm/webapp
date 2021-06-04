// 기존 문법으로 객체의 키나 값을 추출할 때 객체 내장 함수 사용 예제

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
console.log(combined); // { one: 1, two: 2, three: 3, four: 4 }

var combined = Object.assign({}, objectOne, objectTwo);
console.log(combined); // { one: 1, two: 2, other: -1, three: 3, four: 4 }

var combined = Object.assign({}, objectTwo, objectOne);
console.log(combined); // { three: 3, four: 4, other: 0, one: 1, two: 2 }
