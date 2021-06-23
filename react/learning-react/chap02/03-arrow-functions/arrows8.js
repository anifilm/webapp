// 일반적인 함수 (bind 사용)
var gangwon = {
  resorts: ['용평', '평창', '강촌', '강릉', '홍천'],
  print: function (delay = 1000) {
    setTimeout(function () {
      console.log(this.resorts.join(','));
    }.bind(this), delay);
  },
};

gangwon.print(); // 용평,평창,강촌,강릉,홍천
