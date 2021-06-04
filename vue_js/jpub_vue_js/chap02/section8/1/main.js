var app = new Vue({
  el: '#app',
  data: {
    // 객체 데이터
    message: {
      value: 'Hello Vue.js!'
    },
    // 배열 데이터
    list: ['사과', '바나나', '딸기'],
    // 다른 데이터를 사용해서 list에서 값을 추출하기 위한 요소
    num: 1
  }
})
