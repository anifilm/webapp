let color_lawn = {
  title: '잔디',
  color: '#00ff00',
  rating: 0,
};

const rateColor = (color, rating) => ({
  ...color, // 객체 스프레드 연산자
  rating
});

/*
  더 나은 방법으로 객체 스프레드 연산자(...)를 사용한다.
*/

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0

console.log(color_lawn);
