import { Store } from 'vuex';
import { PresenceStore } from './index';

function initStore(store: Store<PresenceStore>) {
  // Initialize Members
  store.dispatch('member/initMembers');
}

export const useInitStore = () => initStore;
