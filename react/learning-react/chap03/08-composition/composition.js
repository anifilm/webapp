const template = 'hh:mm:ss tt';
const clockTime = template
  .replace('hh', '03')
  .replace('mm', '33')
  .replace('ss', '33')
  .replace('tt', 'PM');

console.log(clockTime); // 03:33:33 PM
