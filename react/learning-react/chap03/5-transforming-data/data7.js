let schools = [
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' },
];

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));

let updatedSchools = editName('Stratford', 'HB Woodlawn', schools);

console.log(updatedSchools[1]); // { name: 'HB Woodlawn' }
console.log(schools[1]); // { name: 'Stratford' }
