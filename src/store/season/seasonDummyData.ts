import { SeasonModule } from '../../types';

export default {
  seasons: [
    {
      id: '1920',
      name: 'DEL Saison 2019/20',
      created: new Date('2019-07-01'),
      games: [
        {
          id: '1',
          opponent: 'Mannheim',
          mode: 'regular',
          home: true,
          date: new Date('2019-10-01'),
          presentMembers: []
        },
        {
          id: '2',
          opponent: 'München',
          mode: 'regular',
          home: false,
          date: new Date('2019-11-01'),
          presentMembers: []
        },
        {
          id: '3',
          opponent: 'Bremerhaven',
          mode: 'playoffs',
          home: true,
          date: new Date('2020-03-18'),
          presentMembers: []
        }
      ]
    },
    {
      id: '2021',
      name: 'Penny DEL Saison 2020/21',
      created: new Date('2020-07-01'),
      games: []
    }
  ],
  currentSeasonId: '2021'
} as SeasonModule;
