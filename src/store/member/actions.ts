import { ActionTree } from 'vuex';
import { CreateMemberPayload, MemberModule, UpdateMemberPayload } from '../../types';
import * as actions from './actions/index';

export default {
  initMembers: (context) => actions.initMembers(context),
  createMember: (context, payload: CreateMemberPayload) => actions.setMember(context, payload),
  updateMember: (context, payload: UpdateMemberPayload) => actions.setMember(context, payload),
  deleteMember: (context, payload: string) => actions.deleteMember(context, payload)
} as ActionTree<MemberModule, MemberModule>;
