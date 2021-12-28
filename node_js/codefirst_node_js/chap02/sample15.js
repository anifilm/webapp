// Prototype Chaining

const animal = {
  leg: 4,
  tail: 1,
  say() {
    console.log('I have 4 legs 1 tail');
  },
};

const dog = {
  sound: '멍멍!!',
  happy: true,
};

const cat = {
  sound: '냐옹~~~',
};

dog.__proto__ = animal;
cat.__proto__ = dog;

console.log(cat.leg);
console.log(cat.sound);
console.log(cat.happy);