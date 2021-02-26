import { RouteRecordRaw } from 'vue-router';
import { MemberEdit, Members } from '../pages';

export default [
  {
    name: 'members',
    path: '/members',
    component: Members,
    meta: {
      tabName: 'members'
    }
  },
  {
    name: 'member:edit',
    path: '/members/:memberId',
    component: MemberEdit,
    meta: {
      tabName: 'members'
    }
  }
] as RouteRecordRaw[];
