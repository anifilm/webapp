import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 스토어 정의
const store = new Vuex.Store({
  state: {
    // 태스크 초기 스테이트
    tasks: [
      {
        id: 1,
        name: '우유 사기',
        done: false
      },
      {
        id: 2,
        name: 'Vue.js 관련 책 사기',
        done: true
      }
    ]
  }
});

// 스토어 익스포트
export default store;
