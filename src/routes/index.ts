import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/consume', component: () => import(/* webpackChunkName: "Consume" */ '../pages/Consume.vue') },
  { path: '/about', component: () => import(/* webpackChunkName: "About" */ '../pages/About.vue') },
  { path: '/donate', component: () => import(/* webpackChunkName: "Donate" */ '../pages/Donate.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;