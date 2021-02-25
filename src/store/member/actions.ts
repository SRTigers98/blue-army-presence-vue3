import { ActionTree } from 'vuex';
import { MemberModule } from '../../types';
import * as actions from './actions/index';

export default {
  deleteMember: (context, payload: string) => actions.deleteMember(context, payload)
} as ActionTree<MemberModule, MemberModule>;
