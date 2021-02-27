import { ActionTree } from 'vuex';
import { CreateSeasonPayload, DeleteSeasonGamePayload, SeasonModule, UpdateSeasonPayload } from '../../types';
import * as actions from './actions/index';

export default {
  updateSeason: (context, payload: UpdateSeasonPayload) => actions.setSeason(context, payload),
  createSeason: (context, payload: CreateSeasonPayload) => actions.setSeason(context, payload),
  deleteSeason: (context, payload: string) => actions.deleteSeason(context, payload),
  deleteGame: (context, payload: DeleteSeasonGamePayload) => actions.deleteGame(context, payload)
} as ActionTree<SeasonModule, SeasonModule>;
