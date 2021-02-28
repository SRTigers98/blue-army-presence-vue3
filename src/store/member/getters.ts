import { GetterTree } from 'vuex';
import { Member, MemberModule } from '../../types';

export default {
  members: state => {
    return state.members
      .sort((m1, m2) => (m1.lastName > m2.lastName) ? 1 : ((m2.lastName > m1.lastName) ? -1 : 0));
  },
  activeMembers: (state, getters) => {
    const members = getters.members as Member[];
    return members.filter(m => m.active);
  }
} as GetterTree<MemberModule, MemberModule>;
