import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { Member, MemberDto, MemberModule } from '../../../types';

export default async function (context: ActionContext<MemberModule, MemberModule>) {
  const firebase = useFirebase();
  const memberRef = firebase.database().ref('member');

  memberRef.on('value', snapshot => {
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
  });
}
