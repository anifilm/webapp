var app = new Vue({
  el: '#app',
  data: {
    name: '키메라',
    list: [
      { id: 1, name: '슬라임', hp: 100},
      { id: 2, name: '고블린', hp: 200},
      { id: 3, name: '드래곤', hp: 500}
    ]
  },
  methods: {
    // 추가 버튼을 클릭할 때의 핸들러
    doAdd: function () {
      // 리스트 내부에서 가장 큰 ID 추출하기
      var max = this.list.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // 새로운 몬스터를 리스트에 추가하기
      this.list.push({
        id: max + 1, // 현재 최대 ID에 1을 더해서 유니크 ID로 사용하기
        name: this.name, // 현재 입력 양식의 값
        hp: 500
      })
    }
  }
})
