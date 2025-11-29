import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { CastleBackground, CloudSVG, CrownIcon } from "./Icons";

interface InvitationCoverProps {
  onOpen: () => void;
}

export const InvitationCover = ({ onOpen }: InvitationCoverProps) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative overflow-hidden font-body">
      {/* Fondo con patrón de puntos y nubes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Patrón sutil en el fondo de carga */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}>
        </div>

        <motion.div
          animate={{ x: ["-10%", "110%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute top-20 left-0 text-blue-100 opacity-50"
        >
          <CloudSVG className="w-32 h-auto" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-yellow-400/30"
        onClick={onOpen}
      >
        <div className="bg-blue-900 p-8 text-center text-white cursor-pointer relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
            <CastleBackground className="w-full h-32 text-white" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center mb-4 text-yellow-400 relative z-10"
          >
            <CrownIcon className="w-16 h-16" />
          </motion.div>
          <h1 className="font-royal text-3xl mb-2 relative z-10">Thiago</h1>
          <p className="text-blue-100 font-body text-sm uppercase tracking-widest mb-6 relative z-10 font-semibold">Te invita a su celebración</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-400 transition-colors flex items-center gap-2 mx-auto text-sm relative z-10 font-body"
          >
            <Heart size={16} className="animate-pulse" />
            Abrir Invitación
          </motion.button>
        </div>
      </motion.div>

      <p className="mt-8 text-slate-400 text-xs text-center font-body">Toca el sobre para abrir</p>
    </div>
  );
};
