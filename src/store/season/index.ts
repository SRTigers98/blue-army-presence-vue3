import { Module } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { SeasonModule } from '../../types';

// dummy data
import dummyData from './seasonDummyData';

export const season: Module<SeasonModule, SeasonModule> = {
  namespaced: true,
  state: dummyData,
  getters,
  mutations,
  actions
};
