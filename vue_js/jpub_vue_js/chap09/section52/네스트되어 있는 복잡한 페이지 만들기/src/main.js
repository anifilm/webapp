import Vue from 'vue';
import store from '@/store.js'
import router from '@/router.js';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
