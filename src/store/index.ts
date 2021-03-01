import { createStore } from 'vuex';
import { MemberModule, SeasonModule } from '../types';
import { season } from './season';
import { member } from './member';

export type PresenceStore = SeasonModule & MemberModule;

export default createStore<PresenceStore>({
  modules: {
    season,
    member
  }
});
