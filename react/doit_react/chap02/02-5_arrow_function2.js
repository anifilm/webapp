// 함수 표현식을 반환 (일반적인 함수 선언)
function addNumber(num) {
  return function(value) {
    return num + value;
  };
}
// 함수 표현식을 반환 (화살표 함수로 변환한 예)
var addNumber = num => value => num + value;

var addTwo = addNumber(2);
var result = addTwo(4); // 6


// bind함수를 통해 this scope를 전달한 예
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
