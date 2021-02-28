import { Member, Season, SeasonMemberStatistic } from '../../../types';

export default function (season: Season, member: Member): SeasonMemberStatistic {
  const presentGames = season.games.filter(game => game.presentMembers.includes(member.id));

  const totalGames = presentGames.length;
  const homeGames = presentGames.filter(game => game.home).length;
  const awayGames = totalGames - homeGames;

  return {
    season,
    member,
    totalGames,
    homeGames,
    awayGames
  };
}
