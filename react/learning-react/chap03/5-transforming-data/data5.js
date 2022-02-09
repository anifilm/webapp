const schools = [
  'Yorktown',
  'Washington & Lee',
  'Wakefield',
];

const highSchools = schools.map(school => ({ name: school }));

console.log(highSchools);
// [
//   { name: 'Yorktown' },
//   { name: 'Washington & Lee' },
//   { name: 'Wakefield' }
// ]
