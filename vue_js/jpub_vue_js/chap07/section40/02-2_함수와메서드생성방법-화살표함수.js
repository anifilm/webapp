/* ES5 함수 정의
var newArray = array.map(function (el) {
  return el * 2;
}); */

// ES6 화살표 함수 정의
const newArray = array.map((el) => {
  return el * 2;
});

// 화살표 함수 - return 생략
const newArray = array.map((el) => el * 2);

// 화살표 함수 - 여러 개의 매개변수
const newArray = array.map((el, index) => el * 2);

// 화살표 함수 - 객체 리턴하기
const newArray = array.map((el) => ({
  value: el * 2
}));
