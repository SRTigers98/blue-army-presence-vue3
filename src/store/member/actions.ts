import { ActionContext, ActionTree } from 'vuex';
import { Member, MemberModule } from '../../types';

function deleteMember(context: ActionContext<MemberModule, MemberModule>, memberId: string) {
  const members = [...context.getters.members as Member[]]
    .filter(m => m.id !== memberId);
  context.commit('members', members);
}

export default {
  deleteMember: (context, payload: string) => deleteMember(context, payload)
} as ActionTree<MemberModule, MemberModule>;
