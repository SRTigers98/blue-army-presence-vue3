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
export interface CreateMemberPayload {
  firstName: string;
  lastName: string;
  active: boolean;
}

export type UpdateMemberPayload = Member;
