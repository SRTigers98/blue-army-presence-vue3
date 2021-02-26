import { ActionTree } from 'vuex';
import { MemberModule, UpdateMemberPayload } from '../../types';
import * as actions from './actions/index';

export default {
  updateMember: (context, payload: UpdateMemberPayload) => actions.setMember(context, payload),
  deleteMember: (context, payload: string) => actions.deleteMember(context, payload)
} as ActionTree<MemberModule, MemberModule>;
