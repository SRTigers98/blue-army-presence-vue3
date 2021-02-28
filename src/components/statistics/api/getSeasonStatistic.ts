import { Season, SeasonStatistic } from '../../../types';

export default function (season: Season): SeasonStatistic {
  const totalGames = season.games.length;
  const homeGames = season.games.filter(game => game.home).length;
  const awayGames = totalGames - homeGames;

  return {
    season,
    homeGames,
    awayGames,
    totalGames
  };
}
