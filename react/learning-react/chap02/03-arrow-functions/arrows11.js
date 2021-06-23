// 화살표 함수
var gangwon = {
  resorts: ['용평', '평창', '강촌', '강릉', '홍천'],
  print: function (delay = 1000) {
    setTimeout(() => {
      console.log(this);
      //console.log(this === window);
    }, delay);
  },
};

gangwon.print();
