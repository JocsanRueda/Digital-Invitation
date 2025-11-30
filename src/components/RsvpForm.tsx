import { INVITATION_STATUS } from "../constant/constant";
import { useRsvp } from "../hooks/useRsvp";
import { ConfirmationView } from "./ConfirmationView";
import { InvitationForm } from "./InvitationForm";
export const RsvpForm = () => {
  const {
    firstName, setFirstName,
    lastName, setLastName,
    companions, setCompanions,
    isSubmitted,
    invitationStatus,
    handleSubmit,
    handleCancelAttendance,
  } = useRsvp();

  if (isSubmitted || invitationStatus === INVITATION_STATUS.ACCEPTED) {
    return (
      <ConfirmationView firstName={firstName} handleCancelAttendance={handleCancelAttendance} />
    );
  }

  return (
    <InvitationForm handleSubmit={handleSubmit} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} companions={companions} setCompanions={setCompanions} />
  );
};
