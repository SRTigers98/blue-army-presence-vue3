import { ActionContext } from 'vuex';
import { useFirebase } from '../../../firebase';
import { SaveSeasonGamePayload, SeasonGameDto, SeasonModule } from '../../../types';

export default async function (context: ActionContext<SeasonModule, SeasonModule>, payload: SaveSeasonGamePayload) {
  const firebaseInstance = useFirebase();

  const gameRef = payload.game.id.length > 0 ?
    firebaseInstance.database().ref(`season/${payload.seasonId}/games/${payload.game.id}`) :
    firebaseInstance.database().ref(`season/${payload.seasonId}/games`).push();

  const gameDto: SeasonGameDto = {
    opponent: payload.game.opponent,
    home: payload.game.home,
    mode: payload.game.mode,
    date: payload.game.date.toISOString(),
    presentMembers: payload.game.presentMembers
  }

  await gameRef.set(gameDto);
}
