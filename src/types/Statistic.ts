import { Member, Season } from '.';

export interface SeasonStatistic {
  season: Season;
  homeGames: number;
  awayGames: number;
  totalGames: number;
}

export interface SeasonMemberStatistic {
  season: Season;
  member: Member;
  homeGames: number;
  awayGames: number;
  totalGames: number;
}

export interface Statistic {
  getSeasonStatistic: (season: Season) => SeasonStatistic;
  getSeasonMemberStatistic: (season: Season, member: Member) => SeasonMemberStatistic;
}
