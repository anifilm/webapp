import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
// 플러그인으로 등록하기
Vue.use(Vuex);

// 스토어 만들기
const store = new Vuex.Store({
  state: {
    count: 0,
    list: [
      { id: 1, name: '사과', price: 1000 },
      { id: 2, name: '바나나', price: 2000 },
      { id: 3, name: '딸기', price: 3000 }
    ]
  },
  getters: {
    // 단순하게 상태 리턴하기
    count(state, getter, rootState, rootGetter) {
      return state.count;
    },
    // 리스트 요소들의 price 속성을 기반으로 최대값을 찾아 리턴하기
    max(state) {
      return state.list.reduce((a, b) => {
        return a > b.price ? a : b.price;
      }, 0);
    },
    // 매개 변수를 포함하는 게터, list에서 id가 일치하는 요소 리턴하기
    item(state) {
      return id => state.list.find(el => el.id === id);
    },
    // 다른 게터를 사용할 수도 있음
    name(state, getters) {
      return id => getters.item(id).name;
    }
  }
});

export default store;
