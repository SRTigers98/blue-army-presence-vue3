import { RouteRecordRaw } from 'vue-router';
import { Home, SeasonEdit, Seasons } from '../pages';

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
  },
  {
    name: 'season:edit',
    path: '/seasons/:id',
    component: SeasonEdit,
    meta: {
      seasonsTab: true
    }
  }
] as RouteRecordRaw[];
