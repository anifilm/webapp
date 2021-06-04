// ES6의 불변 변수 사용 방법 알아보기

const num1 = 1;
const num2 = num1 * 3;
console.log(num2); // 3

const str1 = '문자';
const str2 = str1 + '추가';
console.log(str2); // "문자추가"


const arr1 = [];
const arr2 = arr1.concat(1);
console.log(arr2); // [ 1 ]

const arr3 = [...arr2, 2, 3];
console.log(arr3); // [ 1, 2, 3 ]

const arr4 = arr3.slice(0, 1);
console.log(arr4); // [ 1 ]

const [first, ...arr5] = arr3;
console.log(first, arr5); // 1, [ 2, 3 ]


const obj1 = { name: '내 이름', age: 20 };
const objValue = { name: '새 이름', age: obj1.age };
console.log(objValue); // { name: '새 이름', age: 20 }

const obj2 = { ...obj1, name: '새 이름' };
console.log(obj2); // { name: '새 이름', age: 20 }

const { name,  ...obj3 } = obj2;
console.log(name, obj3); // "새 이름", { age: 20 }
