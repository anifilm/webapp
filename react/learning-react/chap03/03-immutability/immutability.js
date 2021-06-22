let color_lawn = {
  title: '잔디',
  color: '#00ff00',
  rating: 0,
};

function rateColor(color, rating) {
  color.rating = rating;
  return color;
}

/*
  rateColor는 원래의 색을 변경한다.
*/

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5

console.log(color_lawn);
