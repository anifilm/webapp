// 객체에 대한 스프레드 연산자
var morning = {
  breakfast: '미역국',
  lunch: '삼치구이와 보리밥',
};

var dinner = '스테이크 정식';

var backpackingMeals = {
  ...morning,
  dinner,
};

console.log(backpackingMeals);
// { breakfast: '미역국', lunch: '삼치구이와 보리밥', dinner: '스테이크 정식' }
