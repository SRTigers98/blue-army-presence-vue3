export interface Member {
  firstName: string;
  lastName: string;
  active: boolean;
}

// Store Module Type
export interface MemberModule {
  members: Member[];
}
