import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Home } from '../pages';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
