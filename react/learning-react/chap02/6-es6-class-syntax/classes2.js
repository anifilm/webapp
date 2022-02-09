// 클래스를 사용해 정의하는 새로운 방식
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(this.destination + '은(는) ' + this.length + '일 걸립니다.');
  }
}

const trip = new Vacation('칠레 산티아고', 9);

trip.print();
