import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 전역 네임스페이스에 스테이트, 게터, 뮤테이션 정의
  state: {
    count: 1
  },
  getters: {
    // state.count 값의 2배를 반환
    double: (state) => state.count + state.count
  },
  mutations: {
    update(state, payload) {
      state.count = payload;
    }
  },
  modules: {
    // 네임 스페이스가 구분된 example 모듈을 정의
    example: {
      namespaced: true,
      getter: {
        // 전역 네임스페이스에 접근하기 위해
        // 3번째, 4번째 인자에 rootState, rootGetters를 전달
        // rootState.count 값의 3배를 반환
        triple: (state, getters, rootState, rootGetters) => {
          return rootState.count + rootGetters.double;
        }
      },
      actions: {
        // rootState.count 값을 5배로
        multiplyByFive(ctx) {
          // 전역 double 게터와 example 모듈의 triple 게터를 사용
          const payload = ctx.rootGetters.double + ctx.getters.triple;

          // 전역 네임스페이스의 update를 호출하기 위해
          // root: true 옵션을 부여
          ctx.commit('update', payload, { root: true });
        }
      }
    }
  }
});

console.log(store.state.count); // 1

// example 모듈의 multiplyByFive 액션을 호출
store.dispatch('example/multiplyByFive');

console.log(store.state.count); // 5

export default store;
