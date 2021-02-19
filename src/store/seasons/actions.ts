import { ActionContext, ActionTree } from 'vuex';
import { Season, SeasonsModule } from './index';

export interface UpdateSeasonPayload {
  id: string;
  name: string;
  created: Date;
  isCurrentSeason: boolean;
}

export interface CreateSeasonPayload {
  name: string;
  isCurrentSeason: boolean;
}

function setSeason(context: ActionContext<SeasonsModule, SeasonsModule>,
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

export default {
  updateSeason: (context, payload: UpdateSeasonPayload) => setSeason(context, payload),
  createSeason: (context, payload: CreateSeasonPayload) => setSeason(context, payload)
} as ActionTree<SeasonsModule, SeasonsModule>;
