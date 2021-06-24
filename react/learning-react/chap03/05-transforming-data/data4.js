const schools = [
  'Yorktown',
  'Washington & Lee',
  'Wakefield',
];

const highSchools = schools.map(school => `${school} High School`);

console.log(highSchools.join('\n'));
// Yorktown High School
// Washington & Lee High School
// Wakefield High School

console.log(schools.join('\n'));
// Yorktown
// Washington & Lee
// Wakefield
