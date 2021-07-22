import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // state 옵션을 사용해 스테이트의 초기값 설정
  state: {
    count: 10
  }
});

// store.state로 스테이트를 참조
console.log(store.state.count); // 10

export default store;
