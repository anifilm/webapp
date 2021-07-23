import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // example 모듈 정의
    example: {
      namespaced: true, // 이 플래그 값에 따라 어떤 차이가 있는지 알아보겠다.
      state: {
        value: 'Example'
      },
      getters: {
        upper: (state) => {
          return state.value.toUpperCase();
        }
      },
      mutations: {
        update(state) {
          state.value = 'Updated';
        }
      },
      actions: {
        update(ctx) {
          ctx.commit('update');
        }
      }
    }
  }
});

export default store;
