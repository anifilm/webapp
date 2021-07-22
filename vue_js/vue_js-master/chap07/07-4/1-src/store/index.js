// Vue, Vuex 임포트
import Vue from 'vue';
import Vuex from 'vuex';

// Vue에 Vuex를 등록
Vue.use(Vuex);

// 스토어 생성
const store = new Vuex.Store({
  // 애플리케이션의 스테이트
  state: {
    count: 0
  },
  // 스테이트의 일부 혹은 스테이트로부터 계산된 값을 반환하는 게터
  getters: {},
  // 스테이트를 업데이트하는 뮤테이션
  mutations: {
    increment(state, amount) {
      state.count += amount;
    }
  },
  // Ajax 요청 등의 비동기 처리 및 로컬 스토리지를 읽고 쓰는 외부 API와의 통신을 주도 담당하는 액션
  actions: {},
  modules: {}
});

// 스테이트 참조
console.log(store.state.count); // 0

// 뮤테이션을 실행해 스테이트 수정
store.commit('increment', 1);

// 스테이트 수정 확인
console.log(store.state.count); // 1

export default store;
