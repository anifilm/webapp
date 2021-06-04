var app = new Vue({
  el: '#app',
  data: {
    // 미리 빈 리스트 준비하기
    list: []
  },
  created: function () {
    axios.get('./list.json').then(function (response) {
      // 데이터를 읽어 들였다면 list에 할당하기
      this.list = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  }
})
