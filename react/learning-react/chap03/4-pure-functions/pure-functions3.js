var frederick = {
  name: 'Frederick Douglass',
  canRead: false,
  canWrite: false,
};

const selfEducate = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

/*
  순수함수로 객체를 인자로 받아서 새 객체를 반환한다.
  아무 부수 효과도 발생시키지 않는다.
*/

console.log(selfEducate(frederick));
console.log(frederick);
