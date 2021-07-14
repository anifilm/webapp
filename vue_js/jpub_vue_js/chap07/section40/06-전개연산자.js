const array = [1, 2, 3];

// 각각 매개변수로 전달됨
myFunction(...array);

// array를 전개하고, 뒤에 새로운 요소 4 추가하기
const newArray = [...array, 4]; // [1, 2, 3, 4]
