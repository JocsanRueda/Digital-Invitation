import confetti from "canvas-confetti";
import React, { useCallback, useEffect, useState } from "react";
import { cancelInvitation, getInvitationSummary, saveInvitation } from "../api/fireBaseUtils";
import { INVITATION_STATUS } from "../constant/constant";
import type { InvitationSummary } from "../interfaces/summaryInvitation";
import type { InvitationType } from "../types/invitation-types";
import { getIdStorage, getInvitationStorage, saveInvitationStorage } from "../utils/localStorage";
import { sendWhatsAppMessage } from "../utils/whatsapp";

export const useRsvp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companions, setCompanions] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [id, setId] = useState<string>(getIdStorage());
  const [invitationStatus, setInvitationStatus] = useState<string | null | undefined>(null);

  useEffect(() => {
    const storedInvitation = getInvitationStorage();
    setInvitationStatus(storedInvitation?.status || null);
    setId(getIdStorage());
    if (storedInvitation?.status === INVITATION_STATUS.ACCEPTED) {
      setFirstName(storedInvitation.firstName);
      setLastName(storedInvitation.lastName);
      setCompanions(storedInvitation.companions?.toString() ?? "");
    }
  }, []);

  const showConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#87CEEB", "#FFFFFF"],
    });
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;

    const invitation: InvitationType = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      companions: parseInt(companions, 10) || 0,
      status: INVITATION_STATUS.ACCEPTED,
    };

    saveInvitationStorage(invitation);
    await saveInvitation(invitation);

    const fullName = `${firstName} ${lastName}`;
    let message = `_*${fullName}*_ ha confirmado su asistencia a la celebración`;
    if (companions && parseInt(companions, 10) >= 0) {
      message += ` con ${companions} *acompañantes*.`;
    }

    const invitationSummary: InvitationSummary | null = await getInvitationSummary();
    const acceptedInvitations = invitationSummary?.acceptedInvitationsCount ?? 0;
    const totalCompanions = (invitationSummary?.totalCompanionsForAccepted ?? 0) + acceptedInvitations;

    message += `\n\n*Resumen:*\n\n*Total de personas confirmadas*: ${totalCompanions}.`;

    sendWhatsAppMessage(message);
    showConfetti();
    setIsSubmitted(true);
    setInvitationStatus(INVITATION_STATUS.ACCEPTED);
  }, [id, firstName, lastName, companions]);

  const handleCancelAttendance = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const storageInvitation = getInvitationStorage();
    if (!storageInvitation) return;

    const updatedInvitation = { ...storageInvitation, status: INVITATION_STATUS.NONE };
    saveInvitationStorage(updatedInvitation);
    await cancelInvitation(storageInvitation.id);

    const fullName = `${storageInvitation.firstName} ${storageInvitation.lastName}`;
    let message = `_*${fullName}*_ ha cancelado su asistencia a la celebración.`;

    const invitationSummary: InvitationSummary | null = await getInvitationSummary();
    const acceptedInvitations = invitationSummary?.acceptedInvitationsCount ?? 0;
    const totalCompanions = (invitationSummary?.totalCompanionsForAccepted ?? 0) + acceptedInvitations;

    message += `\n\n*Resumen:*\n\n*Total de personas confirmadas*: ${totalCompanions}.`;

    sendWhatsAppMessage(message);

    // Resetting state
    setIsSubmitted(false);
    setInvitationStatus(INVITATION_STATUS.NONE);
    setFirstName("");
    setLastName("");
    setCompanions("");
  }, []);

  return {
    firstName, setFirstName,
    lastName, setLastName,
    companions, setCompanions,
    isSubmitted,
    invitationStatus,
    handleSubmit,
    handleCancelAttendance,
  };
};
