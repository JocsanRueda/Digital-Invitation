import { motion } from "framer-motion";
import { CastleBackground, CrownIcon, TrumpetIcon } from "./Icons";

export const Header = () => {
  return (
    <header className="relative pt-16 pb-12 px-6 text-center overflow-hidden">
      {/* Castillo de Fondo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-full flex justify-center"
        >
          <CastleBackground className="w-[150%] max-w-2xl h-auto text-blue-900/30" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative z-10"
      >
        {/* Trompetas y Corona */}
        <div className="flex justify-center items-end gap-2 mb-6 h-24">
          <motion.div
            initial={{ x: -50, opacity: 0, rotate: -25 }}
            animate={{ x: 0, opacity: 1, rotate: -10 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-2"
          >
            <motion.div
              animate={{ rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <TrumpetIcon className="w-20 h-20 text-yellow-600" />
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="z-20 -mb-2"
          >
            <CrownIcon className="w-20 h-20 text-yellow-500 drop-shadow-xl" />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0, rotate: 25 }}
            animate={{ x: 0, opacity: 1, rotate: 10 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-2"
          >
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
            >
              <TrumpetIcon flipped className="w-20 h-20 text-yellow-600" />
            </motion.div>
          </motion.div>
        </div>

        <h2 className="text-blue-900 font-body tracking-widest text-sm uppercase mb-3 font-semibold">Nuestro Pequeño Príncipe</h2>
        <h1 className="font-royal text-6xl text-blue-900 mb-4 bg-clip-text drop-shadow-sm">Thiago</h1>
        <p className="text-slate-600 max-w-xs mx-auto text-sm leading-relaxed font-body font-medium">
          Con gran alegría te invitamos a celebrar su primer año de reinado.
        </p>
      </motion.div>
    </header>
  );
};
