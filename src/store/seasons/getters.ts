import { GetterTree } from 'vuex';
import { SeasonsModule } from './index';

export default {
  getSeasons: state => {
    return state.seasons
      .sort((s1, s2) => s2.created.getTime() - s1.created.getTime());
  }
} as GetterTree<SeasonsModule, SeasonsModule>;
