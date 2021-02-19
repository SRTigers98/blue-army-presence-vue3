import { ActionContext, ActionTree } from 'vuex';
import { Season, SeasonsModule } from './index';

export interface UpdateSeasonPayload {
  id: string;
  name: string;
  created: Date;
  isCurrentSeason: boolean;
}

function setSeason(context: ActionContext<SeasonsModule, SeasonsModule>,
                   payload: { id?: string; name: string; created?: Date; isCurrentSeason: boolean }) {
  const seasons = [...context.getters.seasons as Season[]];

  const seasonIndex = payload.id ? seasons.findIndex(s => s.id === payload.id) : -1;
  const seasonData: Season = {
    id: payload.id || (Math.random() * 10000).toString(),
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
    context.commit('currentSeasonId', payload.id);
  }
}

export default {
  updateSeason: (context, payload: UpdateSeasonPayload) => setSeason(context, payload)
} as ActionTree<SeasonsModule, SeasonsModule>;
