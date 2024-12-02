import { createRouter, createWebHistory } from 'vue-router';
import ConsumeVue from '../pages/Consume.vue';
import HomeVue from '../pages/Home.vue';
import AboutVue from '../pages/About.vue';
import DonateVue from '../pages/Donate.vue';

// TODO: code splitting

const routes = [
  { path: '/', component: HomeVue },
  { path: '/consume', component: ConsumeVue, },
  { path: '/about', component: AboutVue, },
  { path: '/donate', component: DonateVue, },
]

const router = createRouter({
  // NOTE: if we have routing problems with the server, try reverting to createWebHistory
  history: createWebHistory(),
  routes,
})

export default router;