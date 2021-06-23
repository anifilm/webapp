// 함수를 포함하는 객체 리터럴 개선
var name = '탈락';
var elevation = 9738;
var print = function () {
  console.log(`${this.name} 산의 높이는 ${this.elevation}피트입니다.`);
};

var funHike = { name, elevation, print };

funHike.print(); // 탈락 산의 높이는 9738피트입니다.
