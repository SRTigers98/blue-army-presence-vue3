import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { About, Home } from '../pages';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
