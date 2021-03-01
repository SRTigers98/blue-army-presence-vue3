export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  active: boolean;
}

// Store Module Type
export interface MemberModule {
  members: Member[];
}

// Store Action Types
export interface SaveMemberPayload {
  id?: string;
  firstName: string;
  lastName: string;
  active: boolean;
}
