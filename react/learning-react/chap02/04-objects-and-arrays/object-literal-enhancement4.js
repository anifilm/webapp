// 객체 리터럴 개선
var name = 'Julia Mancuso';
var sound = 'go fast';

const skier = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log('속력(mph):', mph);
  },
};

skier.powderYell();
skier.speed(350);
console.log(JSON.stringify(skier));
