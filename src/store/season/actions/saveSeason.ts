import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { SaveSeasonPayload, SeasonModule } from '../../../types';

export default async function (context: ActionContext<SeasonModule, SeasonModule>, payload: SaveSeasonPayload) {
  const firebaseInstance = useFirebase();

  const seasonRef = payload.id ?
    firebaseInstance.database().ref(`season/${payload.id}`) :
    firebaseInstance.database().ref('season').push();

  await seasonRef.child('name').set(payload.name);
  await seasonRef.child('created').set((payload.created || new Date()).toISOString());

  if (payload.isCurrentSeason) {
    await firebaseInstance.database().ref('currentSeasonId')
      .set(seasonRef.key);
  } else if (context.getters.currentSeasonId === payload.id) {
    await firebaseInstance.database().ref('currentSeasonId')
      .remove();
  }
}
