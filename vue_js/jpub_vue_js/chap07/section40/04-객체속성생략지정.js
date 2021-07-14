const a = 'foo';
const b = 'bar';

/* ES5
const newObject = {
  a: a,
  b: b,
}; */

// ES6 - 변수 이름과 속성 이름이 같으면 생략 가능
const newObject = {
  a,
  b,
};
