import { Module } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { SeasonModule } from '../../types';

export const season: Module<SeasonModule, SeasonModule> = {
  namespaced: true,
  state: {
    seasons: [
      {
        id: '1920',
        name: 'DEL Saison 2019/20',
        created: new Date('2019-07-01'),
        games: []
      },
      {
        id: '2021',
        name: 'Penny DEL Saison 2020/21',
        created: new Date('2020-07-01'),
        games: []
      }
    ],
    currentSeasonId: '2021'
  },
  getters,
  mutations,
  actions
};
