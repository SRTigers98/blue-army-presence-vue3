import { GetterTree } from 'vuex';
import { SeasonsModule } from './index';

export default {
  getSeasons: state => state.seasons
} as GetterTree<SeasonsModule, SeasonsModule>;
