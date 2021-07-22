import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },
  // mutations 옵션에서 뮤테이션을 정의
  mutations: {
    // payload에 포함된 amount를 사용해 스테이스를 수정
    increment(state, payload) {
      state.count = state.count + payload.amount;
    }
  }
});

// 스테이트 참조
console.log(store.state.count); // 10

// store.commit의 두번째 인자로 payload를 전달
store.commit('increment', { amount: 5 });

// 스테이트 수정 확인
console.log(store.state.count); // 15

export default store;
