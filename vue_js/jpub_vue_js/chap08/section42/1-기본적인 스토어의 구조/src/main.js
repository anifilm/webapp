import Vue from 'vue';
import App from './App';
import store from '@/store.js';

Vue.config.productionTip = false;

console.log(store.state.count); // 0
// increment를 커밋하기
store.commit('increment');
console.log(store.state.count); // 1

new Vue({
  el: '#app',
  render: h => h(App)
});
