import { get, ref, set, update } from "firebase/database";
import type { InvitationType } from "../types/invitation-types";
import  { database } from "./firebaseConfig";
import type { InvitationSummary } from "../interfaces/summaryInvitation";
import { INVITATION_STATUS } from "../constant/constant";

export async function saveInvitation(invitation:InvitationType) {
  try {
    const userRef = ref(database, "invitations/" + invitation.id);
    await set(userRef, {
      id: invitation.id,
      firstName: invitation.firstName,
      lastName: invitation.lastName,
      companions: invitation.companions,
      status: invitation.status,

    });
    console.log("Datos de usuario guardados exitosamente!");
  } catch (error) {
    console.error("Error al guardar usuario:", error);
  }
}

export async function updateInvitation(invitation:InvitationType) {
  try {
    const userRef = ref(database, "invitations/" + invitation.id); // Referencia al usuario
    await update(userRef, {
      ...invitation
    });
    console.log("Email de usuario actualizado exitosamente!");
  } catch (error) {
    console.error("Error al actualizar email:", error);
  }
}

export async function cancelInvitation(invitationId: string) {
  try {
    const userRef = ref(database, "invitations/" + invitationId); // Referencia al usuario
    await update(userRef, {
      status: INVITATION_STATUS.REJECTED
    });
    console.log("Invitación cancelada exitosamente!");
  } catch (error) {
    console.error("Error al cancelar invitación:", error);
  }
}

/**
 * Recupera todas las invitaciones, cuenta las aceptadas y suma el número de acompañantes.
 * @returns {Promise<InvitationSummary | null>} Un objeto con el resumen de las invitaciones o null si hay un error.
 */
export async function getInvitationSummary(): Promise<InvitationSummary > {
  let totalInvitations = 0;
  let acceptedInvitationsCount = 0;
  let totalCompanionsForAccepted = 0;
  const acceptedInvitationsList: InvitationType[] = [];

  try {
    const invitationsRef = ref(database, "invitations");
    const snapshot = await get(invitationsRef);

    if (snapshot.exists()) {
      const allInvitations = snapshot.val(); // Obtiene todos los datos en el nodo 'invitations'

      for (const key in allInvitations) {
        if (Object.prototype.hasOwnProperty.call(allInvitations, key)) {
          const invitation: InvitationType = allInvitations[key];
          totalInvitations++;

          if (invitation.status === "accepted") {
            acceptedInvitationsCount++;
            acceptedInvitationsList.push(invitation); // Añade a la lista de aceptadas

            if (typeof invitation.companions === "number" && invitation.companions >= 0) {
              totalCompanionsForAccepted += invitation.companions;
            }
          }
        }
      }

      return {
        totalInvitations,
        acceptedInvitationsCount,
        totalCompanionsForAccepted,
        acceptedInvitationsList
      };

    } else {
      console.log("No se encontraron invitaciones en la base de datos.");
      return {
        totalInvitations: 0,
        acceptedInvitationsCount: 0,
        totalCompanionsForAccepted: 0,
        acceptedInvitationsList: []
      };
    }
  } catch (error) {
    console.error("Error al obtener el resumen de invitaciones:", error);
    return {
      totalInvitations: 0,
      acceptedInvitationsCount: 0,
      totalCompanionsForAccepted: 0,
      acceptedInvitationsList: []
    };
  }
}
