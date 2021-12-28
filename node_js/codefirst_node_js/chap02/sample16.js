// 프로토타입을 클래스처럼 사용해보기

function Animal() {}

Animal.prototype.legs = 4;
Animal.prototype.tail = 1;

const dog = new Animal();
const cat = new Animal();