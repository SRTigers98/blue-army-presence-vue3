import { createStore } from 'vuex';
import { seasons } from './seasons';
import { SeasonsModule } from '../types';

type PresenceStore = SeasonsModule;

export default createStore<PresenceStore>({
  modules: {
    seasons
  }
});
