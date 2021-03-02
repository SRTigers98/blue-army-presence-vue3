import { createStore } from 'vuex';
import { MemberModule, SeasonModule, VersionModule } from '../types';
import { season } from './season';
import { member } from './member';
import { version } from './version';

export type PresenceStore = SeasonModule & MemberModule & VersionModule;

export default createStore<PresenceStore>({
  modules: {
    season,
    member,
    version
  }
});
