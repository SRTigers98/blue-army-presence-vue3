import { ActionTree } from 'vuex';
import { MemberModule, SaveMemberPayload } from '../../types';
import * as actions from './actions/index';

export default {
  initMembers: (context) => actions.initMembers(context),
  saveMember: (context, payload: SaveMemberPayload) => actions.saveMember(context, payload),
  deleteMember: (context, payload: string) => actions.deleteMember(context, payload)
} as ActionTree<MemberModule, MemberModule>;
