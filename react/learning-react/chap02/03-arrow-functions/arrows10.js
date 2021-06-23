// 화살표 함수 (this는 undefined)
var gangwon = {
  resorts: ['용평', '평창', '강촌', '강릉', '홍천'],
  print: (delay = 1000) => {
    setTimeout(() => {
      console.log(this.resorts.join(','));
    }, delay);
  },
};

gangwon.print(); // 오류 발생! Cannot read property 'join' of undefined
