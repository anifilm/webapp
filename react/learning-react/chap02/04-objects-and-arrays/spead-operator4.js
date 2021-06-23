// 스프레드 연산자와 구조분해를 함께 사용
var lakes = ['경포호', '화진포', '송지호', '청초호'];
var [first, ...rest] = lakes;

console.log(rest.join(', ')); // 화진포, 송지호, 청초호
