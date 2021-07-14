const array = [
  { id: 1, name: '사과' },
  { id: 2, name: '바나나' }
];
// find - 조건과 일치하는 요소 하나를 찾아 리턴
const result = array.find((el) => el.id === 2);
console.log(result); // { id: 2, name: '바나나' }
