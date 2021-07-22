import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },
  // getters 옵션에서 게터를 정의
  getters: {
    // 스테이트로부터 값을 계산
    squared: state => state.count * state.count,
    // 다른 게터로부터 받은 값도 사용 가능
    cubed: (state, getters) => state.count * getters.squared
  }
});

// store.getters를 통해 게터 참조
console.log(store.getters.cubed); // 1000

export default store;
