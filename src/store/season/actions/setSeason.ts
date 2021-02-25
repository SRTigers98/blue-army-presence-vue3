import { ActionContext } from 'vuex';
import { Season, SeasonModule } from '../../../types';

export default function (context: ActionContext<SeasonModule, SeasonModule>,
                         payload: { id?: string; name: string; created?: Date; isCurrentSeason: boolean }) {
  const seasons = [...context.getters.seasons as Season[]];

  const seasonIndex = payload.id ? seasons.findIndex(s => s.id === payload.id) : -1;
  const seasonData: Season = {
    id: payload.id || (Math.random() * 10000).toFixed(0),
    name: payload.name,
    created: payload.created || new Date()
  };

  if (~seasonIndex) {
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
