const schools = {
  Yorktown: 10,
  'Washington & Lee': 2,
  Wakefield: 5,
};

const schoolArray = Object.keys(schools).map((key) =>
  ({
    name: key,
    wins: schools[key],
  })
);

console.log(schoolArray);
// [
//   { name: 'Yorktown', wins: 10 },
//   { name: 'Washington & Lee', wins: 2 },
//   { name: 'Wakefield', wins: 5 }
// ]
