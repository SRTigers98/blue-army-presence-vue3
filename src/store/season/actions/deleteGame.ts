import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { DeleteSeasonGamePayload, SeasonModule } from '../../../types';

export default async function (context: ActionContext<SeasonModule, SeasonModule>, payload: DeleteSeasonGamePayload) {
  const firebaseInstance = useFirebase();

  await firebaseInstance.database()
    .ref(`season/${payload.seasonId}/games/${payload.gameId}`)
    .remove();
}
