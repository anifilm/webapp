import products from '@/api/products.js';

// 상품 상제 전용 Vuex 모듈
export default {
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set(state, { detail }) {
      state.detail = detail;
    },
    clear(state) {
      state.detail = {};
    }
  },
  actions: {
    load({ commit }, id) {
      products.asyncFind(id, detail => {
        commit('set', { detail });
      });
    },
    destroy({ commit }) {
      commit('clear');
    }
  }
};
