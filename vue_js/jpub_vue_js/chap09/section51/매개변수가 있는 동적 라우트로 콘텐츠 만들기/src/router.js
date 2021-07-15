import Vue from 'vue';
import VueRouter from 'vue-router';

// 라우트 전용 컴포넌트 읽어 들이기
import Home from '@/views/Home.vue';
import ProductList from '@/views/ProductList';
import Product from '@/views/Product.vue';
// Vuex와 마찬가지로 플러그인 등록하기
Vue.use(VueRouter);

// VueRouter 인스턴스 생성하기
const router = new VueRouter({
  // URL의 경로와 연결할 컴포넌트 맵핑하기
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product', // ID가 붙어 있지 않으면 리스트 출력하기
      component: ProductList
    },
    {
      path: '/product/:id',
      component: Product,
      // 함수로 지정하면 첫 번째 매개변수로 현재 라우트 객체를 사용할 수 있음
      props: route => ({
        id: Number(route.params.id)
      })
    }
  ]
});

// 생성한 VueRouter 인스턴스 익스포트하기
export default router;
