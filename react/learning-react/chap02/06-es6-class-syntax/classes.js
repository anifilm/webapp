// 이전 방식으로 생성자를 만들고 프로토타입 설정하기
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + '은(는) ' + this.length + '일 걸립니다.');
};

var maui = new Vacation('마우이', 7);

maui.print();
