import Vue from 'vue';
import VueRouter from 'vue-router';

// 라우트 전용 컴포넌트 읽어 들이기
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
// Vuex와 마찬가지로 플러그인 등록하기
Vue.use(VueRouter);

// VueRouter 인스턴스 생성하기
const router = new VueRouter({
  // URL의 경로와 연결할 컴포넌트 맵핑하기
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: Product }
  ]
});

// 생성한 VueRouter 인스턴스 익스포트하기
export default router;
