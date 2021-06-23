import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { SeasonModule } from '../../../types';

export default async function (context: ActionContext<SeasonModule, SeasonModule>, seasonId: string) {
  const firebaseInstance = useFirebase();

  if (context.getters.currentSeasonId === seasonId) {
    await firebaseInstance.database()
      .ref('currentSeasonId')
      .remove()
  }
  await firebaseInstance.database()
    .ref(`season/${seasonId}`)
    .remove();
}
