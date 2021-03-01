import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { MemberModule } from '../../../types';

export default async function (context: ActionContext<MemberModule, MemberModule>, memberId: string) {
  const firebase = useFirebase();

  await firebase.database()
    .ref(`member/${memberId}`)
    .remove();
}
