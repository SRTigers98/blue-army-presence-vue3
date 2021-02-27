import { RouteRecordRaw } from 'vue-router';
import { SeasonEdit, SeasonGameEdit, SeasonGames, Seasons } from '../pages';

export default [
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
    path: '/seasons/:seasonId/edit',
    component: SeasonEdit,
    meta: {
      tabName: 'seasons'
    }
  },
  {
    name: 'season:new',
    path: '/seasons/new',
    component: SeasonEdit,
    meta: {
      tabName: 'seasons'
    }
  },
  {
    name: 'season:games',
    path: '/seasons/:seasonId/games',
    component: SeasonGames,
    meta: {
      tabName: 'seasons'
    }
  },
  {
    path: '/seasons/:seasonId',
    redirect: { name: 'season:games' }
  },
  {
    name: 'season:game:edit',
    path: '/seasons/:seasonId/games/:gameId',
    component: SeasonGameEdit,
    meta: {
      tabName: 'seasons'
    }
  }
] as RouteRecordRaw[];
