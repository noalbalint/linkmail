import { createRouter, createWebHistory } from 'vue-router';
import CreateVue from '../pages/Create.vue';
import ConsumeVue from '../pages/Consume.vue';
import HomeVue from '../pages/Home.vue';
import DemoVue from '../pages/Demo.vue';
import DonateVue from '../pages/Donate.vue';

// TODO: code splitting

const routes = [
  { path: '/', component: HomeVue },
  { path: '/create', component: CreateVue },
  { path: '/consume', component: ConsumeVue, },
  { path: '/demo', component: DemoVue, },
  { path: '/donate', component: DonateVue, },
]

const router = createRouter({
  // NOTE: if we have routing problems with the server, try reverting to createWebHistory
  history: createWebHistory(),
  routes,
})

export default router;