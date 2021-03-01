export interface MemberDto {
  firstName: string;
  lastName: string;
  active: boolean;
}

export interface SeasonDto {
  name: string;
  created: string;
}

export interface SeasonGameDto {
  opponent: string;
  home: boolean;
  mode: 'regular' | 'playoffs';
  date: string;
  presentMembers: string;
}
