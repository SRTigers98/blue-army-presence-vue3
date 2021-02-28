import { RouteRecordRaw } from 'vue-router';
import { Home, NotFound, Statistics } from '../pages';
import seasonRoutes from './seasonRoutes';
import memberRoutes from './memberRoutes';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      tabName: 'home'
    }
  },
  ...seasonRoutes,
  ...memberRoutes,
  {
    name: 'statistics',
    path: '/statistics',
    component: Statistics,
    meta: {
      tabName: 'statistics'
    }
  },
  {
    name: '404',
    path: '/:notFound(.*)',
    component: NotFound
  }
] as RouteRecordRaw[];
