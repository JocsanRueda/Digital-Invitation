
export const saveInvitationStatus = (status: string) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem("invitationStatus", status);
};

export const getInvitationStatus = (): string | null => {
  // eslint-disable-next-line no-undef
  return localStorage.getItem("invitationStatus");
};

export const clearInvitationStatus = () => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem("invitationStatus");
};
