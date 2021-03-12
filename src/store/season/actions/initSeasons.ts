import { ActionContext } from 'vuex';
import firebase from 'firebase';
import { useFirebase } from '../../../firebase';
import { Season, SeasonDto, SeasonGame, SeasonGameDto, SeasonModule } from '../../../types';

async function initSeasons(context: ActionContext<SeasonModule, SeasonModule>) {
  const firebaseInstance = useFirebase();
  const seasonRef = firebaseInstance.database().ref('season');

  const seasonHandler = (snapshot: firebase.database.DataSnapshot) => {
    const seasons: Season[] = [];
    snapshot.forEach(seasonSnapshot => {
      const seasonId = seasonSnapshot.key as string;
      const seasonDto = seasonSnapshot.val() as SeasonDto;

      const seasonGames: SeasonGame[] = [];
      seasonSnapshot.child('games').forEach(gameSnapshot => {
        const gameId = gameSnapshot.key as string;
        const gameDto = gameSnapshot.val() as SeasonGameDto;

        const seasonGame: SeasonGame = {
          id: gameId,
          opponent: gameDto.opponent,
          home: gameDto.home,
          mode: gameDto.mode,
          date: new Date(gameDto.date),
          presentMembers: gameDto.presentMembers
        }
        seasonGames.push(seasonGame);
      });

      const season: Season = {
        id: seasonId,
        name: seasonDto.name,
        created: new Date(seasonDto.created),
        games: seasonGames
      }
      seasons.push(season);
    });

    context.commit('seasons', seasons);
  }

  seasonRef.get()
    .then(seasonHandler);
  seasonRef.on('value', seasonHandler);
}

async function initCurrentSeasonId(context: ActionContext<SeasonModule, SeasonModule>) {
  const firebaseInstance = useFirebase();
  const currentSeasonIdRef = firebaseInstance.database().ref('currentSeasonId');

  const currentSeasonIdHandler = (snapshot: firebase.database.DataSnapshot) => {
    context.commit('currentSeasonId', snapshot.val());
  };

  currentSeasonIdRef.get()
    .then(currentSeasonIdHandler);
  currentSeasonIdRef.on('value', currentSeasonIdHandler);
}

export default async function (context: ActionContext<SeasonModule, SeasonModule>) {
  await initSeasons(context);
  await initCurrentSeasonId(context);
}
