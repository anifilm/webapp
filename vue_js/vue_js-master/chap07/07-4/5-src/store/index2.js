import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 예시로 비동기 처리를 사용한 함수
// 실제 애플리케이션이라면 서버에서 데이터를 받아오는 부분
function getCountNum(type) {
  return new Promise(resolve => {
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

const store = new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    }
  },
  actions: {
    incrementAsync({ commit }, payload) {
      // 비동기로 데이터를 받아옴
      return getCountNum(payload.type).then(data => {
        // 응답 내용을 로그로 출력
        console.log(data);
        // 응답 내용을 페이로드로 전달해 뮤테이션을 실행
        commit('increment', { amount: data.amount });
      });
    }
  }
});

console.log(store.state.count); // 10

store.dispatch('incrementAsync', { type: 'one' }).then(() => {
  // 액션이 완료된 다음 실행
  console.log(store.state.count); // 11
});

export default store;
