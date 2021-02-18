import { createStore } from 'vuex';
import { seasons, SeasonsModule } from './seasons';

type PresenceStore = SeasonsModule;

export default createStore<PresenceStore>({
  modules: {
    seasons
  }
});
