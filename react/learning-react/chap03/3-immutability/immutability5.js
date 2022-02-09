let list = [
  { title: '과격한 빨강' },
  { title: '잔디' },
  { title: '파티 핑크' },
];

const addColor = (title, array) => array.concat({ title });

/*
  array.concat을 사용하면 원래의 배열이 변경되지 않는다.
*/

console.log(addColor('매력적인 초록', list).length); // 4
console.log(list.length); // 3

console.log(list);
