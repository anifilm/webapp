function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
}
// 화살표 함수 표현식
const multiplyX = (x) => (a) => multiply(a, x);

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

// => ((x * a) * b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => (x) => x * a * b + c;
const formula = equation(2, 3, 4);
const x = 2;
const result = formula(x);

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

// => ((x * 2) * 3) + 4
const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));

// => ((x + 4) * 3) * 2
const formulaB = (x) => multiplyTwo(multiplyThree(addFour(x)));
