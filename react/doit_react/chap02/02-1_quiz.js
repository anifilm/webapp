/* 3분 코딩
다음은 병합 연산자로 표현된 코드 입니다. 템플릿 문자열을 적용하여 바꿔 보세요.

var cart = { name: '도서', price: 1500 };
var getTotal = function(cart) {
  return cart.price + '원';
};

var myCart = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart)} + '입니다.';

*/
var cart = { name: '도서', price: 1500 };
var getTotal = function(cart) {
  return `${cart.price}원`;
};

var myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getToral(cart)}입니다.`;
