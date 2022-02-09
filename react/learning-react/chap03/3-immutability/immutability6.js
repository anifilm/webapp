let list = [
  { title: '과격한 빨강' },
  { title: '잔디' },
  { title: '파티 핑크' },
];

const addColor = (title, list) => [...list, {title}];

/*
  ... 스프레드 연산자로 배열을 복사하면 더 편리하다.
*/

console.log(addColor('매력적인 초록', list).length); // 4
console.log(list.length); // 3

console.log(list);
