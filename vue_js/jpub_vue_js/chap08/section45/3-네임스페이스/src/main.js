import Vue from 'vue';
import App from './App';
import store from '@/store.js';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store, // store 등록하기
  render: h => h(App)
});
