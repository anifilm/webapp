var app = new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: '슬라임', hp: 100 },
      { id: 2, name: '고블린', hp: 200 },
      { id: 3, name: '드래곤', hp: 500 }
    ]
  },
  methods: {
    // 공격 버튼을 클릭할 때의 핸들러
    doAttack: function (index) {
      this.list[index].hp -= 10 // HP 감소시키기
    }
  }
})
