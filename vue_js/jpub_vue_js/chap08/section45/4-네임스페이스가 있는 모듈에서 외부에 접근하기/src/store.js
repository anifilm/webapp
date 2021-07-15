import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
// 플러그인으로 등록하기
Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  getters: {
    test(state, getters, rootState, rootGetters) {
      // 자기 자신의 item 게터 사용: getters['moduleA/item']
      getters.item;
      // 루트의 user 게터 사용
      rootGetters.user;

      return [getters.item, rootGetters.user];
    },
    item() {
      return 'getter: moduleA/item';
    }
  },
  actions: {
    test({ dispatch, commit, getters, rootGetters }) {
      // 자시 자신의 update 디스패치하기
      dispatch('update');
      // 루트의 update 디스패치하기
      dispatch('update', null, { root: true });
      // 루트의 update 커밋하기
      commit('update', null, { root: true });
      // 루트에 등록되어 있는 moduleB의 update 커밋하기
      commit('moduleB/update', null, { root: true });
    },
    update() {
      console.log('action: moduleA/update');
    }
  }
};
const moduleB = {
  namespaced: true,
  mutations: {
    update() {
      console.log('mutation: moduleB/update');
    }
  }
};

// 스토어 만들기
const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  },
  getters: {
    user() {
      return 'getter: user';
    }
  },
  mutations: {
    update() {
      console.log('mutation: update');
    }
  },
  actions: {
    update() {
      console.log('action: update');
    }
  }
});

// 어떤 것이 호출되었는지 로그로 확인해 보기
store.dispatch('moduleA/test');
console.log(store.getters['moduleA/test']);

export default store;
