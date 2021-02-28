import { RouteRecordRaw } from 'vue-router';
import { Home, NotFound } from '../pages';
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
    name: '404',
    path: '/:notFound(.*)',
    component: NotFound
  }
] as RouteRecordRaw[];
