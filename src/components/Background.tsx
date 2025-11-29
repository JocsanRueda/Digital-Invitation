import { motion } from "framer-motion";
import { CloudSVG, GiftSVG, HotAirBalloon, PartyHatSVG, SparkleSVG } from "./Icons";

export const Background = () => {
  return (
    <>
      {/* TEXTURA CORREGIDA: Fondo con Patrón Real más sutil (Opacity 0.03) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute w-full h-full opacity-[0.03]" width="100%" height="100%">
          <defs>
            <pattern id="royal-diamond" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25 5 L30 10 L25 15 L20 10 Z" fill="#1e3a8a" /> {/* Rombo Central */}
              <path d="M0 30 L5 35 L0 40 L-5 35 Z" fill="#1e3a8a" />   {/* Borde Izquierdo */}
              <path d="M50 30 L55 35 L50 40 L45 35 Z" fill="#1e3a8a" /> {/* Borde Derecho */}
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#royal-diamond)" />
        </svg>
      </div>

      {/* NUEVO: Marco de Cumpleaños (Borde) - Color cambiado a un azul más oscuro y encendido */}
      <div className="fixed inset-0 pointer-events-none z-50 border-5  border-blue-600 opacity-80  min-h-screen"></div>

      {/* NUEVO: Esquinas con Regalos y Cosas de Cumpleaños */}
      <div className="fixed inset-0 pointer-events-none z-40 h-full">
        {/* Esquina Superior Izquierda: Regalo Azul/Cian */}
        <div className="absolute top-2 left-2 p-2">
          <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
            <GiftSVG className="w-20 h-20" colorBox="#0ea5e9" colorRibbon="#f43f5e" /> {/* Sky Blue & Rose */}
          </motion.div>
        </div>
        {/* Esquina Superior Derecha: Gorro de Fiesta Magenta */}
        <div className="absolute top-2 right-2 p-2">
          <motion.div animate={{ rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <PartyHatSVG className="w-20 h-20" colorBase="#d946ef" colorDecor="#fde047" /> {/* Fuchsia & Yellow */}
          </motion.div>
        </div>
        {/* Esquina Inferior Derecha: Regalo Verde */}
        <div className="absolute bottom-2 right-2 p-2">
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <GiftSVG className="w-20 h-20" colorBox="#22c55e" colorRibbon="#f59e0b" /> {/* Green & Amber */}
          </motion.div>
        </div>
        {/* Esquina Inferior Izquierda: Gorro de Fiesta Morado */}
        <div className="absolute bottom-2 left-2 p-2">
          <motion.div animate={{ rotate: [10, 0, 10] }} transition={{ repeat: Infinity, duration: 6 }}>
            <PartyHatSVG className="w-20 h-20" colorBase="#8b5cf6" colorDecor="#38bdf8" /> {/* Violet & Light Blue */}
          </motion.div>
        </div>
      </div>

      {/* Elementos de fondo Mágicos (Nubes, Destellos y Globos) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: ["-20%", "120%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-10 left-0 text-blue-100 opacity-50"
        >
          <CloudSVG className="w-48 h-auto" />
        </motion.div>

        {/* --- FLOTA DE GLOBOS (Ahora con más movimiento) --- */}

        {/* GLOBO 1 (Derecha Superior - Grande) */}
        <motion.div
          initial={{ y: 20, x: 0 }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }} // Movimiento aumentado
          transition={{
            y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            x: { repeat: Infinity, duration: 20, ease: "easeInOut" }
          }}
          className="absolute top-24 right-[10%] opacity-80"
        >
          <HotAirBalloon className="w-16 h-auto" />
        </motion.div>

        {/* GLOBO 2 (Izquierda Media - Pequeño) */}
        <motion.div
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }} // Movimiento aumentado
          transition={{
            y: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 },
            x: { repeat: Infinity, duration: 15, ease: "easeInOut", delay: 1 }
          }}
          className="absolute top-40 left-[5%] opacity-60"
        >
          <HotAirBalloon className="w-10 h-auto" />
        </motion.div>

        {/* GLOBO 3 (Centro Abajo - Mediano) */}
        <motion.div
          initial={{ y: 50, x: 0 }}
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }} // Mucho más movimiento vertical
          transition={{
            y: { repeat: Infinity, duration: 14, ease: "easeInOut", delay: 5 },
            x: { repeat: Infinity, duration: 25, ease: "easeInOut", delay: 2 }
          }}
          className="absolute top-[60%] left-[15%] opacity-70"
        >
          <HotAirBalloon className="w-14 h-auto" />
        </motion.div>

        {/* GLOBO 4 (NUEVO - Izquierda Arriba) */}
        <motion.div
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, 20, 0], x: [0, 25, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 },
            x: { repeat: Infinity, duration: 18, ease: "easeInOut", delay: 0 }
          }}
          className="absolute top-10 left-[20%] opacity-50"
        >
          <HotAirBalloon className="w-12 h-auto" />
        </motion.div>

        {/* GLOBO 5 (NUEVO - Derecha Abajo) */}
        <motion.div
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 16, ease: "easeInOut", delay: 3 },
            x: { repeat: Infinity, duration: 22, ease: "easeInOut", delay: 4 }
          }}
          className="absolute top-[50%] right-[5%] opacity-60"
        >
          <HotAirBalloon className="w-14 h-auto" />
        </motion.div>

        {/* GLOBO 6 (NUEVO - Fondo Lejano Centro) */}
        <motion.div
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, -15, 0], x: [0, 40, 0] }} // Movimiento lateral largo
          transition={{
            y: { repeat: Infinity, duration: 20, ease: "easeInOut", delay: 0 },
            x: { repeat: Infinity, duration: 30, ease: "easeInOut", delay: 0 }
          }}
          className="absolute top-[20%] left-[50%] opacity-40"
        >
          <HotAirBalloon className="w-8 h-auto" />
        </motion.div>

        <motion.div
          initial={{ x: -50 }}
          animate={{ x: ["-10%", "110%"] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear", delay: 5 }}
          className="absolute top-32 right-0 text-blue-50 opacity-60"
        >
          <CloudSVG className="w-32 h-auto scale-x-[-1]" />
        </motion.div>

        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 text-yellow-400 opacity-50"
        >
          <SparkleSVG className="w-6 h-6" />
        </motion.div>

        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-1/3 text-yellow-300 opacity-40"
        >
          <SparkleSVG className="w-4 h-4" />
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 0.6, 0], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute top-64 right-10 text-blue-200 opacity-60"
        >
          <SparkleSVG className="w-8 h-8" />
        </motion.div>
      </div>
    </>
  );
};
