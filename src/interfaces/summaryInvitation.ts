import type { InvitationType } from "../types/invitation-types";

export interface InvitationSummary {
  totalInvitations: number;
  acceptedInvitationsCount: number;
  totalCompanionsForAccepted: number;
  acceptedInvitationsList: InvitationType[]; // Opcional: lista de invitaciones aceptadas
}
