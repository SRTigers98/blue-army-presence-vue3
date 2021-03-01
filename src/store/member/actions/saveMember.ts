import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { MemberDto, MemberModule, SaveMemberPayload } from '../../../types';

export default async function (context: ActionContext<MemberModule, MemberModule>, member: SaveMemberPayload) {
  const firebase = useFirebase();

  const memberDto: MemberDto = {
    firstName: member.firstName,
    lastName: member.lastName,
    active: member.active
  }

  const memberRef = member.id ?
    firebase.database().ref(`member/${member.id}`) :
    firebase.database().ref('member').push();

  await memberRef.set(memberDto);
}
