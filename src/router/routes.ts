import { RouteRecordRaw } from 'vue-router';
import { Home, Seasons } from '../pages';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      homeTab: true
    }
  },
  {
    name: 'seasons',
    path: '/seasons',
    component: Seasons,
    meta: {
      seasonsTab: true
    }
  }
] as Array<RouteRecordRaw>;
