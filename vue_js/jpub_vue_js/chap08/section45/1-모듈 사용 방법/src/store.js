import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
// 플러그인으로 등록하기
Vue.use(Vuex);

const moduleA = {
  state: {
    count: 1
  }
}
const moduleB = {
  state: {
    count: 2
  }
}

// 스토어 만들기
const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
  }
});

export default store;
