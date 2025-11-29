import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { CastleBackground } from "./Icons";
import { API_KEY, INVITATION_STATUS, WHATSAPP_BASE_URL } from "../constant/constant";
import { getInvitationStatus, saveInvitationStatus } from "../utils/localStorage";

export const RsvpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companions, setCompanions] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [invitationStatus, setInvitationStatus] = useState<string | null>(getInvitationStatus());

  React.useEffect(() => {
    setInvitationStatus(getInvitationStatus());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;

    const fullName = `${firstName} ${lastName}`;

    let message = `_*${fullName}*_  ha confirmado su asistencia a la celebración.`;

    if (companions && parseInt(companions, 10) >= 0) {
      message += ` *Número de acompañantes*: ${companions}.`;
    }
    const whatsappURL = `${WHATSAPP_BASE_URL}${encodeURIComponent(
      message
    )}&apikey=${API_KEY}`;

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#87CEEB", "#FFFFFF"]

    });

    // eslint-disable-next-line no-undef
    fetch(whatsappURL)
      .then((response) => {
        if (response.ok) {
          console.log("Mensaje enviado correctamente");
          setIsSubmitted(true);
        } else {
          console.error("Error al enviar el mensaje");
        }
      })
      .catch((error) => console.error("Error:", error));

    setIsSubmitted(true);
    setInvitationStatus(INVITATION_STATUS.ACCEPTED);
    saveInvitationStatus(INVITATION_STATUS.ACCEPTED);

  };

  if (isSubmitted || invitationStatus === INVITATION_STATUS.ACCEPTED) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white border-2 border-green-500 rounded-2xl p-8 text-center shadow-lg"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <CheckCircle size={32} />
        </div>
        <h3 className="font-royal text-2xl text-blue-900 mb-2">¡Gracias, {firstName}!</h3>
        <p className="text-slate-500 font-body">Tu asistencia ha sido confirmada. ¡Te esperamos en el castillo!</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-blue-900 rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <CastleBackground className="w-full h-full object-cover scale-150" />
      </div>

      <h3 className="font-royal text-2xl mb-2 relative z-10">Confirmar Asistencia</h3>
      <p className="text-blue-200 text-sm mb-6 relative z-10 font-body">Por favor confirma tu asistencia para reservar tu lugar en el banquete real.</p>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            required
            placeholder="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-center font-body"
          />
          <input
            type="text"
            required
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-center font-body"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Nº de acompañantes (opcional)"
            max={5}
            min={0}
            value={companions}
            onChange={(e) => setCompanions(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-center font-body"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-linear-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform active:scale-95 transition-all font-body"
        >
          ¡Si, asistiré!
        </button>
      </form>
    </div>
  );
};
