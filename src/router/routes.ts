import { RouteRecordRaw } from 'vue-router';
import { Home, SeasonEdit, Seasons } from '../pages';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      tabName: 'home'
    }
  },
  {
    name: 'seasons',
    path: '/seasons',
    component: Seasons,
    meta: {
      tabName: 'seasons'
    }
  },
  {
    name: 'season:edit',
    path: '/seasons/:id',
    component: SeasonEdit,
    meta: {
      tabName: 'seasons'
    }
  }
] as RouteRecordRaw[];
