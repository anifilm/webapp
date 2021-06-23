var lastName = 'Oh';
var middleName = '현석';
var firstName = 'Frank';

var ticketAgent = '예술의 전당';
var event = '서태지와 아이들';
var qty = 2;
var price = 10;

// ES6 템플릿 문자열은 공백(줄바꿈 포함)을 유지한다.
console.log(`
${firstName} 님께,

${event} 티켓 ${qty} 건을 구매해주셔서 감사합니다.

주문 상세 정보:

  ${lastName} ${firstName} ${middleName}
  ${qty} x $${price} = $${qty * price} 공연: ${event}

공연 시작 30분 전까지 배부처에서 티켓을 수령하시기 바랍니다.

감사합니다.

${ticketAgent} 드림
`);
