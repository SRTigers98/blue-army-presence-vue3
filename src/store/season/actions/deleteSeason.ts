import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { SeasonModule } from '../../../types';

export default async function (context: ActionContext<SeasonModule, SeasonModule>, seasonId: string) {
  const firebaseInstance = useFirebase();

  await firebaseInstance.database()
    .ref(`season/${seasonId}`)
    .remove();
}
