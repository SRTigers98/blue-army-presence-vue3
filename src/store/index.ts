import { createStore } from 'vuex';
import { AuthModule, MemberModule, SeasonModule, VersionModule } from '../types';
import { season } from './season';
import { member } from './member';
import { auth } from './auth';
import { version } from './version';

export type PresenceStore = SeasonModule & MemberModule & AuthModule & VersionModule;

export default createStore<PresenceStore>({
  modules: {
    season,
    member,
    auth,
    version
  }
});
