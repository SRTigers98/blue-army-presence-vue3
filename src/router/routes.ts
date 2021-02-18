import { RouteRecordRaw } from 'vue-router';
import { Home, Seasons } from '../pages';

export default [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'seasons',
    path: '/seasons',
    component: Seasons
  }
] as Array<RouteRecordRaw>;
