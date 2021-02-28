import { Statistic } from '../../../types';
import getSeasonStatistic from './getSeasonStatistic';
import getSeasonMemberStatistic from './getSeasonMemberStatistic';

export const useStatistic = (): Statistic => ({
  getSeasonStatistic,
  getSeasonMemberStatistic
});
