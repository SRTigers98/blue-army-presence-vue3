import { RouteRecordRaw } from 'vue-router';
import { Home } from '../pages';
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
  ...memberRoutes
] as RouteRecordRaw[];
