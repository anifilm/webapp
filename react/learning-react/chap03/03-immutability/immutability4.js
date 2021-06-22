let list = [
  { title: '과격한 빨강' },
  { title: '잔디' },
  { title: '파티 핑크' },
];

var addColor = function (title, colors) {
  colors.push({ title: title });
  return colors;
};

/*
  색을 추가하면 원래의 배열이 바뀐다.
*/

console.log(addColor('매력적인 초록', list).length); // 4
console.log(list.length); // 4

console.log(list);
