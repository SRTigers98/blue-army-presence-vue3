import { Module } from 'vuex';
import { MemberModule } from '../../types';
import getters from './getters';

export const member: Module<MemberModule, MemberModule> = {
  namespaced: true,
  state: {
    members: [
      {
        firstName: 'Max',
        lastName: 'Mustermann',
        active: true
      },
      {
        firstName: 'Hans',
        lastName: 'Biermann',
        active: false
      }
    ]
  },
  getters
};
