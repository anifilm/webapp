import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
// 플러그인으로 등록하기
Vue.use(Vuex);

// 스토어 만들기
const store = new Vuex.Store({
  state: {
    message: '메시지'
  }
});

export default store;
