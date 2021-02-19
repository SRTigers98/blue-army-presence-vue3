import { RouteRecordRaw } from 'vue-router';
import { Home } from '../pages';
import seasonsRoutes from './seasonsRoutes';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      tabName: 'home'
    }
  },
  ...seasonsRoutes
] as RouteRecordRaw[];
