import { Module } from 'vuex';
import { MemberModule } from '../../types';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export const member: Module<MemberModule, MemberModule> = {
  namespaced: true,
  state: {
    members: [
      {
        id: '01',
        firstName: 'Max',
        lastName: 'Mustermann',
        active: true
      },
      {
        id: '02',
        firstName: 'Hans',
        lastName: 'Biermann',
        active: false
      }
    ]
  },
  getters,
  mutations,
  actions
};
