import { RouteRecordRaw } from 'vue-router';
import { Members } from '../pages';

export default [
  {
    name: 'members',
    path: '/members',
    component: Members,
    meta: {
      tabName: 'members'
    }
  }
] as RouteRecordRaw[];
