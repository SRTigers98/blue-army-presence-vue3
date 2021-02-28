import { ActionContext } from 'vuex';
import { SaveSeasonGamePayload, Season, SeasonGame, SeasonModule } from '../../../types';

export default function (context: ActionContext<SeasonModule, SeasonModule>, payload: SaveSeasonGamePayload) {
  const seasons = [...context.getters.seasons as Season[]];
  const seasonIdx = seasons.findIndex(s => s.id === payload.seasonId);
  if (~seasonIdx) {
    const seasonGames = [...seasons[seasonIdx].games];
    const gameIdx = payload.game.id.length > 0 ? seasonGames.findIndex(g => g.id === payload.game.id) : -1;
    if (~gameIdx) {
      seasonGames[gameIdx] = payload.game;
    } else {
      const newGame: SeasonGame = {
        ...payload.game,
        id: (Math.random() * 10000).toFixed(0)
      };
      seasonGames.push(newGame);
    }
    seasons[seasonIdx].games = seasonGames;
    context.commit('seasons', seasons);
  }
}
