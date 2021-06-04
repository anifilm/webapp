function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this);
      console.log(this.name + ': 멍멍!');
    }
  }
}

const blackDog = new WhiteDog();
blackDog.bark(); // 검둥이: 멍멍!
