import { ActionContext } from 'vuex';
import { SaveSeasonPayload, Season, SeasonModule } from '../../../types';

export default function (context: ActionContext<SeasonModule, SeasonModule>, payload: SaveSeasonPayload) {
  const seasons = [...context.getters.seasons as Season[]];

  const seasonIndex = payload.id ? seasons.findIndex(s => s.id === payload.id) : -1;
  const seasonData: Season = {
    id: payload.id || (Math.random() * 10000).toFixed(0),
    name: payload.name,
    created: payload.created || new Date(),
    games: []
  };

  if (~seasonIndex) {
    seasonData.games = seasons[seasonIndex].games;
    seasons[seasonIndex] = seasonData;
  } else {
    seasons.push(seasonData);
  }

  context.commit('seasons', seasons);

  if (payload.isCurrentSeason) {
    context.commit('currentSeasonId', seasonData.id);
  } else if (context.getters.currentSeasonId === seasonData.id) {
    context.commit('currentSeasonId', null);
  }
}
