var frederick = {
  name: 'Frederick Douglass',
  canRead: false,
  canWrite: false,
};

const selfEducate = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};

/*
  여전히 순수 함수가 아니고 원본 객체를 변화시킨다.
*/

console.log(selfEducate(frederick));
console.log(frederick);
