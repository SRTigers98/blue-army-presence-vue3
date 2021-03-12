import { Store } from 'vuex';
import { PresenceStore } from './index';

function initStore(store: Store<PresenceStore>) {
  // Initialize Members
  store.dispatch('member/initMembers');
  // Initialize Seasons and SeasonGames
  store.dispatch('season/initSeasons');
  // Initialize User Auth Information
  store.dispatch('auth/initAuth');
}

export const useInitStore = () => initStore;
