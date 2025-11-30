import type { InvitationType } from "../types/invitation-types";
import { v4 as uuidv4 } from "uuid";
export const saveIdStorage = (id: string) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem("id", id);
};

export const getIdStorage = (): string  => {
  // eslint-disable-next-line no-undef
  const id = localStorage.getItem("id");

  if (id) {
    return id;
  }else{
    const newId= uuidv4();
    saveIdStorage(newId);
    return newId;

  }
};

export const saveInvitationStorage = (invitation: InvitationType) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem("invitation", JSON.stringify(invitation));
};

export const getInvitationStorage = (): InvitationType | null => {
  // eslint-disable-next-line no-undef
  const invitation = localStorage.getItem("invitation");
  return invitation ? JSON.parse(invitation) : null;
};

export const clearInvitationStorage = () => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem("invitation");
};
