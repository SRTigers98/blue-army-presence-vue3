import { ActionContext } from 'vuex';
import { DeleteSeasonGamePayload, Season, SeasonModule } from '../../../types';

export default function (context: ActionContext<SeasonModule, SeasonModule>, payload: DeleteSeasonGamePayload) {
  const seasons = [...(context.getters.seasons as Season[])];
  const season = seasons.find(s => s.id === payload.seasonId);
  if (season) {
    season.games = season.games.filter(g => g.id !== payload.gameId);
    const seasonIndex = seasons.findIndex(s => s.id === season.id);
    seasons[seasonIndex] = season;
    context.commit('seasons', seasons);
  }
}
