import { ActionContext } from 'vuex';
import firebase from 'firebase';
import { useFirebase } from '../../../firebase';
import { Member, MemberDto, MemberModule } from '../../../types';

export default async function (context: ActionContext<MemberModule, MemberModule>) {
  const firebaseInstance = useFirebase();
  const memberRef = firebaseInstance.database().ref('member');

  const memberHandler = (snapshot: firebase.database.DataSnapshot) => {
    const members: Member[] = [];
    snapshot.forEach(memberSnapshot => {
      const memberId = memberSnapshot.key as string;
      const memberDto = memberSnapshot.val() as MemberDto;
      members.push({
        id: memberId,
        ...memberDto
      });
    });
    context.commit('members', members);
  }

  await memberRef.once('value', memberHandler);
  memberRef.on('value', memberHandler);
}
