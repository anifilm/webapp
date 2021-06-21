// ES6의 배열 전개 연산자(Spread Operator) 사용 방법 알아보기

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [...array1, ...array2];
// combined = ['one', 'two', 'three', 'four'];
var [first, second, three = 'empty', ...others] = array1;
// first = 'one', second = 'two', three = 'empty', others = []

function func(...args) {
  var [first, ...others] = args;
}

function func2(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

// 올바르지 못한 예
// var wrongArr = ...array1; // -> [...array1] 이렇게 가능

// 참고자료
// https://velog.io/@recordboy/전개-연산자Spread-Operator
