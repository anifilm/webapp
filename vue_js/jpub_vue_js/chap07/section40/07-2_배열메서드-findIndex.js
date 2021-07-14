const array = [
  { id: 1, name: '사과' },
  { id: 2, name: '바나나' }
];
// findIndex - 조건과 일치하는 요소 하나를 찾아 해당 요소의 인덱스를 리턴
const result = array.findIndex((el) => el.id === 2);
console.log(result); // 1
