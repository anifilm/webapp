import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    }
  },
  // actions 옵션에서 액션을 정의
  actions: {
    incrementAction(ctx) {
      // increment 뮤테이션을 실행
      ctx.commit('increment');
    }
  }
});

// 스테이트 참조
console.log(store.state.count); // 10

// store.dispatch로 액션을 호출
store.dispatch('incrementAction');

// 스테이트 수정 확인
console.log(store.state.count); // 11

export default store;
