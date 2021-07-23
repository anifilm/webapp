import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 예시로 비동기 처리를 사용한 함수
// 실제 애플리케이션이라면 서버에서 데이터를 받아오는 부분
function getCountNum(type) {
  return new Promise((resolve) => {
    // 1초 후 type에 따른 데이터를 반환
    setTimeout(() => {
      let amount;
      switch (type) {
        case 'one':
          amount = 1;
          break;
        case 'two':
          amount = 2;
          break;
        case 'ten':
          amount = 10;
          break;
        default:
          amount = 0;
      }
      resolve({ amount });
    }, 1000);
  });
}

// 카운터 모듈 정의
const counter = {
  // 스테이트
  state: {
    count: 10
  },
  // 게터
  getters: {
    squared: (state) => state.count * state.count
  },
  // 뮤테이션
  mutations: {
    increment(state, amount) {
      state.count += amount;
    }
  },
  // 액션
  actions: {
    incrementAsync({ commit }, payload) {
      return getCountNum(payload.type).then((data) => {
        console.log(data);
        commit('increment', { amount: data.amount });
      });
    }
  },
  // 모듈은 중첩해서 정의할 수 있다.
  modules: {
    childModule: {
      // ... 모듈 중첩 정의 ...
    }
  }
};

const store = new Vuex.Store({
  // counter 모듈을 스토어에 등록
  modules: {
    counter
  }
});

// 스테이트는 모듈명 아래로 등록됨
// counter 모듀이면 store.state.counter
console.log(store.state.counter.count); // 10

// 게터, 뮤테이션, 액션은 모듈이 없을 때와
// 같은 방법으로 등록 가능함
console.log(store.getters.squared); // 100
store.commit('increment', 5);
store.dispatch('incrementAsync', { type: 'one' });

export default store;
