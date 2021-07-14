var windowPlugin = {
  install: function (Vue) {
    // 플러그인 데이터 전용으로 Vue 인스턴스 사용하기
    var store = new Vue({
      data: {
        scrollY: 0
      }
    });
    // 윈도우 스크롤 이벤트 핸들링하기
    var timer = null;
    window.addEventListener('scroll', function () {
      if (timer === null) {
        timer = setTimeout(function () {
          // 200ms 간격으로 scrollY 속성에 할당하기
          store.scrollY = window.scrollY;
          clearTimeout(timer);
          timer = null;
        }, 200);
      }
    });
    // 인스턴스 속성에 등록하기
    Vue.prototype.$windwo = store.$data;
  }
};

Vue.use(windowPlugin); // 플러그인 등록하기
