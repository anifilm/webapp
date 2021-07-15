import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
// 플러그인으로 등록하기
Vue.use(Vuex);

const myModule = {
  namespaced: true,
  state() {
    return {
      entries: []
    };
  },
  mutations: {
    set(state, payload) {
      state.entries = payload;
    }
  },
  actions: {
    load({ commit }, file) {
      axios.get(file).then(response => {
        commit('set', response.data);
      });
    }
  }
};

// 스토어 만들기
const store = new Vuex.Store({
  modules: {
    moduleA: myModule,
    moduleB: myModule
  }
});

// 다른 데이터를 읽어 들이는 용도으로 사용합니다.
store.dispatch('moduleA/load', '/data/a.json');
store.dispatch('moduleB/load', '/data/b.json');

export default store;
