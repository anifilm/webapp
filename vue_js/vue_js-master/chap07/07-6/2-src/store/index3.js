import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // foo 모듈
    foo: {
      state: {
        value: 123
      },
      action: {
        log(ctx) {
          console.log('모듈 foo의 스테이트', ctx.state);
        }
      }
    },
    // bar 모듈
    bar: {
      state: {
        message: 'Hello!'
      },
      action: {
        log(ctx) {
          console.log('모듈 bar의 스테이트', ctx.state);
        }
      }
    }
  }
});

// log 액션 호출
// foo 모듈의 스테이트와 bar 모듈의 스테이트 내용을 출력
store.dispatch('log');

export default store;
