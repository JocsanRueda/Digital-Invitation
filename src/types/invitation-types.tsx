
import { INVITATION_STATUS } from "../constant/constant"; // Ensure INVITATION_STATUS is an enum

export type InvitationType= {
  id: string;
  firstName: string;
  lastName: string;
  companions?: number | null;
  status: typeof INVITATION_STATUS[keyof typeof INVITATION_STATUS];
}
