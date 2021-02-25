import { MutationTree } from 'vuex';
import { MemberModule } from '../../types';

export default {
  members: (state, payload) => state.members = payload
} as MutationTree<MemberModule>;
