// 기존 자바스크립트의 객체 확장 표현식 사용 방법 알아보기

var x = 0;
var y = 0;

var obj = {
  x: x,
  y: y,
};

var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';

var obj2 = {
  methodA: function() { console.log('A'); },
  methodB: function() { return 0; },
};


// ES6의 객체 확장 표현식 사용 방법 알아보기

var x = 0;
var y = 0;
var obj = { x, y };

var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
};

var obj2 = {
  x,
  methodA() { console.log('A'); },
  methodB() { return 0; },
}


// 참고자료
// https://velog.io/@nomadhash/Java-Script-객체-확장-표현식과-구조-분해-할당
