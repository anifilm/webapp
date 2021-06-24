const colors = [
  {
    id: '-xekare',
    title: '과격한 빨강',
    rating: 3,
  },
  {
    id: '-jbwsof',
    title: '큰 파랑',
    rating: 2,
  },
  {
    id: '-prigbj',
    title: '큰곰 회색',
    rating: 5,
  },
  {
    id: '-ryhbhsl',
    title: '바나나',
    rating: 1,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);
// {
//   '-xekare': { title: '과격한 빨강', rating: 3 },
//   '-jbwsof': { title: '큰 파랑', rating: 2 },
//   '-prigbj': { title: '큰곰 회색', rating: 5 },
//   '-ryhbhsl': { title: '바나나', rating: 1 }
// }
