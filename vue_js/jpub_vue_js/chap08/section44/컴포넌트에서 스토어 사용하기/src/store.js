import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
// 플러그인으로 등록하기
Vue.use(Vuex);

// 스토어 만들기
const store = new Vuex.Store({
  state: {
    message: '초기 메시지'
  },
  getters: {
    // message를 사용하는 게터
    message(state) {
      return state.message;
    }
  },
  mutations: {
    // message를 변경하는 뮤테이션
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    // message 변경 처리
    doUpdate({ commit }, message) {
      commit('setMessage', { message });
    }
  }
});

export default store;
