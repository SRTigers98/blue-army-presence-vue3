export interface Season {
  id: string;
  name: string;
  created: Date;
}

// Store Module Type
export interface SeasonsModule {
  seasons: Season[];
  currentSeasonId?: string;
}

// Store Action Types
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
