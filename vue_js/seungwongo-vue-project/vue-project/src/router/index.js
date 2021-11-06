import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import DataBinding from '@/views/DataBindingList2.vue';
import Component from '@/views/ProvideInject.vue'
import Composition from '@/views/CompositionAPI.vue'

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
    path: '/component',
    name: 'Component',
    component: Component
  },
  {
    path: '/composition',
    name: 'Composition',
    component: Composition
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
