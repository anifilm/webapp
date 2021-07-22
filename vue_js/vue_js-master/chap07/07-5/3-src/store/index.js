import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
    ],
    // 다음에 추가할 테스크의 ID
    // 실제 애플리케이션이라면 서버에서 생성하거나 UUID 등을 사용함
    nextTaskId: 3
  },
  mutations: {
    // 태스크 추가하기
    addTask(state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      });
      // 다음에 추가할 태스크의 ID 업데이트
      state.nextTaskId += 1;
    },
    // 태스크의 완료 상태 토글
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id;
      });

      filtered.forEach(task => {
        task.done = !task.done;
      });
    }
  }
});

export default store;
