import Vue from 'vue';
import App from './App';
import router from './router.js';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router, // 애플리케이션 등록하기
  render: h => h(App)
});
