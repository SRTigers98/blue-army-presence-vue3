import { GetterTree } from 'vuex';
import { SeasonModule } from '../../types';

export default {
  seasons: state => {
    return state.seasons
      .sort((s1, s2) => s2.created.getTime() - s1.created.getTime());
  },
  currentSeasonId: state => state.currentSeasonId
} as GetterTree<SeasonModule, SeasonModule>;
