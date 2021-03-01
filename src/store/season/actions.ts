import { ActionTree } from 'vuex';
import { DeleteSeasonGamePayload, SaveSeasonGamePayload, SaveSeasonPayload, SeasonModule } from '../../types';
import * as actions from './actions/index';

export default {
  initSeasons: (context) => actions.initSeasons(context),
  saveSeason: (context, payload: SaveSeasonPayload) => actions.saveSeason(context, payload),
  deleteSeason: (context, payload: string) => actions.deleteSeason(context, payload),
  saveGame: (context, payload: SaveSeasonGamePayload) => actions.saveGame(context, payload),
  deleteGame: (context, payload: DeleteSeasonGamePayload) => actions.deleteGame(context, payload)
} as ActionTree<SeasonModule, SeasonModule>;
