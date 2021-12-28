// 객체와 프로퍼티

const country = {
  name: 'Korea',
  population: '5178579',
  get_name: function () {
    return this.name;
  },
};

console.log(country);