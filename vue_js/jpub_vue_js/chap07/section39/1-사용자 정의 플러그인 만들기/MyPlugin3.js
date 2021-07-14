// 사용자 정의 플러그인 정의하기
var MyPlugin = {
  install: function (Vue) {
    Vue.directive('my-plugin', function (el) {
      // 전역 사용자 정의 디렉티브 등록하기
    });
    Vue.mixin({
      created: function () {
        // 전역 믹스인 등록하기
      }
    });
    // 인스턴스 속성 등록하기
    Vue.proptotype.$myPlugin = 'MyPlugin!';
  }
};
