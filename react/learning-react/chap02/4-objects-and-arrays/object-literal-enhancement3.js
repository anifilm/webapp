// 예전 방식의 객체 리터럴
var name = 'Léo Taillefer';
var sound = 'Kahh';

var skier = {
  name: name,
  sound: sound,
  powderYell: function () {
    var yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed: function (mph) {
    this.speed = mph;
    console.log('속력(mph):', mph);
  },
};

skier.powderYell();
skier.speed('엉덩이에 불날 것 같은');
console.log(JSON.stringify(skier));
