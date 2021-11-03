import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import DataBinding from '@/views/DataBindingList2.vue';
import Components from '@/views/ParentComponent5.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
