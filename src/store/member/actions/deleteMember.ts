import { ActionContext } from 'vuex';
import { Member, MemberModule } from '../../../types';

export default function (context: ActionContext<MemberModule, MemberModule>, memberId: string) {
  const members = [...context.getters.members as Member[]]
    .filter(m => m.id !== memberId);
  context.commit('members', members);
}
