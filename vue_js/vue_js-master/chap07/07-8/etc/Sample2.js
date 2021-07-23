// Vue, Vue Router, Vuex 임포트
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// $ npm install vuex-router-sync
// vuex-router-sync의 sync 함수를 임포트
import { sync } from 'vuex-router-sync';

Vue.use(VueRouter);
Vue.use(Vuex);

// 라우터 생성
const router = new VueRouter({
  routes: [
    // ... 라우팅 정의 ...
  ]
});

// 스토어 생성
const store = new Vuex.Store({
  // ... 스토어 정의 ...
});

// 라우터와 스토어를 동기화
sync(store, router);
// store.state.route 아래에 라우팅 데이터를 저장
console.log(store.state.route);
