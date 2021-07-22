import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },
  // mutations 옵션에서 뮤테이션을 정의
  mutations: {
    // increment 뮤테이션 정의
    increment(state) {
      state.count = state.count + 1;
    }
  }
});

// 스테이트 참조
console.log(store.state.count); // 10

// store.commit으로 뮤테이션을 호출
store.commit('increment');

// 스테이트 수정 확인
console.log(store.state.count); // 11

export default store;
