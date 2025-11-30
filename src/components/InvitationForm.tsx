import React from "react";
import { CastleBackground } from "./Icons";

interface InvitationFormProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (e: React.FormEvent) => void;
  firstName: string;
  // eslint-disable-next-line no-unused-vars
  setFirstName: (value: string) => void;
  lastName: string;
  // eslint-disable-next-line no-unused-vars
  setLastName: (value: string) => void;
  companions: string;
  // eslint-disable-next-line no-unused-vars
  setCompanions: (value: string) => void;
}

export const InvitationForm: React.FC<InvitationFormProps> = ({ handleSubmit, firstName, setFirstName, lastName, setLastName, companions, setCompanions }) => {
  return (
    <div className="bg-blue-900 rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <CastleBackground className="w-full h-full object-cover scale-150" />
      </div>

      <h3 className="font-royal text-2xl mb-2 relative z-10">Confirmar Asistencia</h3>
      <p className="text-blue-200 text-sm mb-6 relative z-10 font-body">Por favor confirma tu asistencia para reservar tu lugar en el banquete real.</p>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <input type="text" required placeholder="Nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-center font-body" />
          <input type="text" required placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-center font-body" />
        </div>
        <div>
          <input type="number" placeholder="Nº de acompañantes (opcional)" max={10} min={0} value={companions} onChange={(e) => setCompanions(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-center font-body" />
        </div>
        <button type="submit" className="w-full bg-linear-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform active:scale-95 transition-all font-body">
          ¡Si, asistiré!
        </button>
      </form>
    </div>
  );
};
