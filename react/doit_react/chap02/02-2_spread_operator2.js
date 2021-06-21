// ES6의 객체 전개 연산자(Spread Operator) 사용 방법 알아보기

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  ...objectOne,
  ...objectTwo,
};
console.log(combined); // { one: 1, two: 2, other: -1, three: 3, four: 4 }

var combined = {
  ...objectTwo,
  ...objectOne,
}
console.log(combined); // { three: 3, four: 4, other: 0, one: 1, two: 2 }

var { other, ...others } = combined;
console.log(others); // 0 { three: 3, four: 4, one: 1, two: 2 }


// 참고자료
// https://velog.io/@recordboy/전개-연산자Spread-Operator
