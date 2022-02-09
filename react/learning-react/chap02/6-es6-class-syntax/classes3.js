// 상속
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(this.destination + '은(는) ' + this.length + '일 걸립니다.');
  }
}

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(`당신의 ${this.gear.join('와(과) 당신의 ')}를(을) 가져오십시오.`);
  }
}

const trip = new Expedition('한라산', 3, ['선글라스', '오색 깃발', '카메라']);

trip.print();
