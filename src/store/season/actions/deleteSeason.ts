import { ActionContext } from 'vuex';
import { Season, SeasonModule } from '../../../types';

export default function (context: ActionContext<SeasonModule, SeasonModule>, seasonId: string) {
  const seasons = [...context.getters.seasons as Season[]]
    .filter(s => s.id !== seasonId);
  context.commit('seasons', seasons);
  if (context.getters.currentSeasonId === seasonId) {
    context.commit('currentSeasonId', null);
  }
}
