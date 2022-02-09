const schools = [
  'Yorktown',
  'Washington & Lee',
  'Wakefield',
];

const wSchools = schools.filter(school => school[0] === 'W');

console.log(wSchools);
// [ 'Washington & Lee', 'Wakefield' ]
