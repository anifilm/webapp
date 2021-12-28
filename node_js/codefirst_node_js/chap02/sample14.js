// 프로토타입과 상속

const animal = {
  leg: 4,
  tail: 1,
  say() {
    console.log('I have 4 legs 1 tail');
  },
};

const dog = {
  sound: '멍멍!!',
};

const cat = {
  sound: '냐옹~~~',
};

dog.__proto__ = animal;
cat.__proto__ = animal;

console.log(dog.leg);
console.log(dog.sound);