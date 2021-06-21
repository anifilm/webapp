// 기존 문법으로 배열의 일부 요소를 잘라내거나 연결하는 예제

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';

function func() {
  var args = Array.prototypes.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
}
