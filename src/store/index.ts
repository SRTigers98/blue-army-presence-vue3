import { createStore } from 'vuex';
import { season } from './season';
import { SeasonModule } from '../types';

type PresenceStore = SeasonModule;

export default createStore<PresenceStore>({
  modules: {
    season
  }
});
