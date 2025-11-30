import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";

interface ConfirmationViewProps {
  firstName: string;
  // eslint-disable-next-line no-unused-vars
  handleCancelAttendance: (e: React.FormEvent) => void;
}

export const ConfirmationView: React.FC<ConfirmationViewProps> = ({ firstName, handleCancelAttendance }) => {
  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white border-2 border-green-500 rounded-2xl p-8 text-center shadow-lg">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
        <CheckCircle size={32} />
      </div>
      <h3 className="font-royal text-2xl text-blue-900 mb-2">¡Gracias, {firstName}!</h3>
      <p className="text-slate-500 font-body">Tu asistencia ha sido confirmada. ¡Te esperamos en el castillo!</p>

      <form onSubmit={handleCancelAttendance} className="space-y-4 relative z-10 mt-4">
        <button type="submit" className="w-full bg-red-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform active:scale-95 transition-all font-body">
          Cancelar Asistencia
        </button>
      </form>
    </motion.div>
  );
};
