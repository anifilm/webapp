// 사용자 정의 플러그인 정의하기
var MyPlugin = {
  install: function (Vue, option) {
    console.log(option); // { lang: 'ko' }
  }
};

Vue.use(MyPlugin, { lang: 'ko' }); // 옵션을 전달할 수 있음
