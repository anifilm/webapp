let color_lawn = {
  title: '잔디',
  color: '#00ff00',
  rating: 0,
};

var rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
};

/*
  Object.assign으로 복사본을 만들어서 평점을 부여한다.
*/

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0

console.log(color_lawn);
