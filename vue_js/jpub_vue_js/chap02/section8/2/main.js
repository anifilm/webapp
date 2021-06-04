var app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    // 버튼을 클릭할 때의 핸들러
    increment: function() {
      this.count += 1 // 다시 할당하는 처리만 합니다.
    }
  }
})
