import { MutationTree } from 'vuex';
import { SeasonsModule } from './index';

export default {
  seasons: (state, payload) => state.seasons = payload,
  currentSeasonId: (state, payload) => state.currentSeasonId = payload
} as MutationTree<SeasonsModule>;
