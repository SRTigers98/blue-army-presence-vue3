import { Module } from 'vuex';
import { MemberModule } from '../../types';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

// dummy data
import dummyData from './memberDummyData';

export const member: Module<MemberModule, MemberModule> = {
  namespaced: true,
  state: dummyData,
  getters,
  mutations,
  actions
};
