export interface Season {
  id: string;
  name: string;
  created: Date;
  games: SeasonGame[];
}

export interface SeasonGame {
  id: string;
  opponent: string;
  home: boolean;
  mode: 'regular' | 'playoffs';
  date: Date;
  presentMembers: string[];
}

// Store Module Type
export interface SeasonModule {
  seasons: Season[];
  currentSeasonId?: string;
}

// Store Action Types
export interface SaveSeasonPayload {
  id?: string;
  name: string;
  created?: Date;
  isCurrentSeason: boolean;
}

export interface DeleteSeasonGamePayload {
  gameId: string;
  seasonId: string;
}

export interface SaveSeasonGamePayload {
  seasonId: string;
  game: SeasonGame;
}
