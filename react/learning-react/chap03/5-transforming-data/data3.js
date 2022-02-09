const schools = [
  'Yorktown',
  'Washington & Lee',
  'Wakefield',
];

const cutSchool = (cut, list) =>
  list.filter(school => school !== cut);

console.log(cutSchool('Washington & Lee', schools).join(' * '));
// Yorktown * Wakefield

console.log(schools.join('\n'));
// Yorktown
// Washington & Lee
// Wakefield
