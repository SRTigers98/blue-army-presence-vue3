import { Module } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { SeasonModule } from '../../types';

export const season: Module<SeasonModule, SeasonModule> = {
  namespaced: true,
  state: {
    seasons: []
  },
  getters,
  mutations,
  actions
};
