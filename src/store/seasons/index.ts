import { Module } from 'vuex';
import getters from './getters';

export interface Season {
  id: string;
  name: string;
  isCurrentSeason: boolean;
  created: Date;
}

export interface SeasonsModule {
  seasons: Season[];
}

export const seasons = {
  namespaced: true,
  state: {
    seasons: [
      {
        id: '1920',
        name: 'DEL Saison 2019/20',
        isCurrentSeason: false,
        created: new Date('2019-07-01')
      },
      {
        id: '2021',
        name: 'Penny DEL Saison 2020/21',
        isCurrentSeason: true,
        created: new Date('2020-07-01')
      }
    ]
  },
  getters
} as Module<SeasonsModule, SeasonsModule>;
