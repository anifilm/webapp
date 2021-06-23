// ES6 let을 쓰면 구문적 변수 영역 규칙을 적용할 수 있다.
var topic = '자바스크립트';

if (topic) {
  let topic = '리액트';
  console.log('블록', topic); // 블록 리액트
}

console.log('글로벌', topic); // 글로벌 자바스크립트
