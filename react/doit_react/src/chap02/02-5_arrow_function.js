// 기존 자바스크립트의 함수 사용 방법 알아보기

function add(first, second) { // 일반적인 함수 선언
  return first + second;
}

var add = function(first, second) { // 익명 함수 선언
  return first + second;
};


// ES6의 화살표 함수 사용 방법 알아보기

var add = (first, second) => { return first + second; }; // 함수 표현식
var add = (first, second) => first + second; // return 생략

var addAndMultiple = (first, second) => ({
  add: first + second,
  multiply: first * second,
});
