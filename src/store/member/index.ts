import { Module } from 'vuex';
import { MemberModule } from '../../types';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export const member: Module<MemberModule, MemberModule> = {
  namespaced: true,
  state: {
    members: []
  },
  getters,
  mutations,
  actions
};
