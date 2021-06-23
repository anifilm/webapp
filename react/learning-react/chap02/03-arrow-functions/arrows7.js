// 일반적인 함수
var gangwon = {
  resorts: ['용평', '평창', '강촌', '강릉', '홍천'],
  print: function (delay = 1000) {
    setTimeout(function () {
      console.log(this.resorts.join(','));
    }, delay);
  },
};

gangwon.print(); // 오류 발생! Cannot read property 'join' of undefined
