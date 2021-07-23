import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // ... 스토어 정의를 작성 ...
});

new Vue({
  el: '#app',
  store // 컴포넌트에 스토어를 전달
})
