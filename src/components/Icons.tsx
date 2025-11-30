import { motion } from "framer-motion";

export const CrownIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CloudSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M86.5,34.6c-1.1-8.5-8.4-15.1-17.3-15.1c-1.7,0-3.4,0.2-4.9,0.7c-3.6-8.8-12.3-15-22.4-15C28.4,5.2,18.6,14.8,18.6,26.6
	c0,1,0.1,2,0.2,3C8.3,31.1,0.5,39.4,0.5,49.5c0,10.8,8.8,19.5,19.5,19.5h64.6c8.5,0,15.4-6.9,15.4-15.4
	C100,45.7,94.3,38.6,86.5,34.6z" opacity="0.6" />
  </svg>
);

export const SparkleSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.39 8.26L21 12L14.39 15.74L12 22L9.61 15.74L3 12L9.61 8.26L12 2Z" fill="currentColor" />
  </svg>
);

export const HotAirBalloon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Globo */}
    <path d="M25 0C11.2 0 0 11.2 0 25C0 35 15 45 25 45C35 45 50 35 50 25C50 11.2 38.8 0 25 0Z" fill="#93C5FD" fillOpacity="0.8" />
    <path d="M25 0V45" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
    <path d="M6 10C6 10 15 20 15 42" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
    <path d="M44 10C44 10 35 20 35 42" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
    {/* Cesta */}
    <rect x="20" y="50" width="10" height="8" rx="2" fill="#D97706" />
    {/* Cuerdas */}
    <line x1="20" y1="50" x2="15" y2="40" stroke="#92400E" strokeWidth="1" />
    <line x1="30" y1="50" x2="35" y2="40" stroke="#92400E" strokeWidth="1" />
  </svg>
);

export const GiftSVG = ({ className, colorBox, colorRibbon }: { className?: string, colorBox: string, colorRibbon: string }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none">
    <rect x="10" y="20" width="30" height="25" rx="2" fill={colorBox} />
    <rect x="8" y="14" width="34" height="6" rx="1" fill={colorBox} />
    <rect x="23" y="14" width="4" height="31" fill={colorRibbon} />
    <path d="M25 14 C 25 14 20 5 15 10 C 12 12 25 14 25 14 Z" fill={colorRibbon} />
    <path d="M25 14 C 25 14 30 5 35 10 C 38 12 25 14 25 14 Z" fill={colorRibbon} />
  </svg>
);

export const PartyHatSVG = ({ className, colorBase, colorDecor }: { className?: string, colorBase: string, colorDecor: string }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none">
    <path d="M25 5 L 40 45 H 10 Z" fill={colorBase} />
    <circle cx="25" cy="5" r="3" fill={colorDecor} />
    <circle cx="20" cy="35" r="2" fill={colorDecor} fillOpacity="0.6" />
    <circle cx="30" cy="25" r="2" fill={colorDecor} fillOpacity="0.6" />
    <circle cx="25" cy="15" r="2" fill={colorDecor} fillOpacity="0.6" />
    <path d="M10 45 Q 25 50 40 45" stroke={colorDecor} strokeWidth="2" fill="none" />
  </svg>
);

export const CakeSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">

    {/* Velas */}
    <rect x="12" y="15" width="3" height="10" fill="#60A5FA" />
    <rect x="23.5" y="12" width="3" height="13" fill="#A78BFA" />
    <rect x="35" y="15" width="3" height="10" fill="#60A5FA" />
    {/* Base del pastel */}
    <rect x="5" y="25" width="40" height="20" rx="3" fill="#FCD34D" />
    <rect x="5" y="35" width="40" height="10" rx="3" fill="#FBBF24" />
    {/* Glaseado */}
    <path d="M5 25 C 5 25 10 20 15 25 C 20 30 25 20 30 25 C 35 30 40 20 45 25" stroke="#F472B6" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Llamas Animadas (Estilo Fuego) */}
    {/* Llama 1 (Izquierda) */}
    <motion.path
      d="M13.5 15 Q 15 12 13.5 9 Q 12 12 13.5 15 Z"
      fill="#F59E0B"
      animate={{
        scale: [1, 1.2, 0.9, 1.1, 1],
        opacity: [0.8, 1, 0.7, 1],
        y: [0, -1, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1]
      }}
      style={{ originX: 0.5, originY: 1 }} // Pivote en la base
    />
    {/* Llama 2 (Centro - Más grande) */}
    <motion.path
      d="M25 12 Q 27 8 25 5 Q 23 8 25 12 Z"
      fill="#F59E0B"
      animate={{
        scale: [1, 1.3, 0.8, 1.2, 1],
        opacity: [0.9, 0.7, 1, 0.8, 0.9],
        y: [0, -1.5, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.2
      }}
      style={{ originX: 0.5, originY: 1 }}
    />
    {/* Llama 3 (Derecha) */}
    <motion.path
      d="M36.5 15 Q 38 12 36.5 9 Q 35 12 36.5 15 Z"
      fill="#F59E0B"
      animate={{
        scale: [0.9, 1.1, 1, 0.9, 1],
        opacity: [0.7, 1, 0.8, 0.7, 0.8],
        y: [0, -0.5, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut",
        delay: 0.1
      }}
      style={{ originX: 0.5, originY: 1 }}
    />

    {/* Decoraciones */}
    <circle cx="10" cy="30" r="2" fill="#F472B6" />
    <circle cx="20" cy="30" r="2" fill="#60A5FA" />
    <circle cx="30" cy="30" r="2" fill="#F472B6" />
    <circle cx="40" cy="30" r="2" fill="#60A5FA" />
  </svg>
);

import { GiTrumpetFlag } from "react-icons/gi";

export const TrumpetIcon = ({ className, flipped = false }: { className?: string; flipped?: boolean }) => (
  <p className={className}>  <GiTrumpetFlag
    className={className}

    style={{
      transform: flipped ? "scaleX(-1)" : "none",
      color: "currentColor",
    }}
  /></p>

);

export const CastleBackground = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="0.8" className={className} preserveAspectRatio="xMidYMax">
    <path d="M80 140 V 70 L 80 60 L 120 60 L 120 70 V 140" fill="currentColor" fillOpacity="0.05" />
    <path d="M80 60 L 100 40 L 120 60" />
    <path d="M100 40 V 25 M 100 25 L 110 30 M 100 25 L 100 20" strokeWidth="1" />
    <path d="M90 140 V 110 C 90 105, 110 105, 110 110 V 140" fill="currentColor" fillOpacity="0.2" />
    <path d="M40 140 V 80 L 35 80 L 35 70 L 65 70 L 65 80 L 60 80 V 140" fill="currentColor" fillOpacity="0.05" />
    <path d="M35 70 L 50 50 L 65 70" />
    <path d="M50 50 V 35 M 50 35 L 58 40" strokeWidth="1" />
    <rect x="45" y="90" width="10" height="15" rx="5" strokeWidth="0.5" />
    <path d="M160 140 V 80 L 165 80 L 165 70 L 135 70 L 135 80 L 140 80 V 140" fill="currentColor" fillOpacity="0.05" />
    <path d="M165 70 L 150 50 L 135 70" />
    <path d="M150 50 V 35 M 150 35 L 142 40" strokeWidth="1" />
    <rect x="145" y="90" width="10" height="15" rx="5" strokeWidth="0.5" />
    <path d="M60 100 H 80 M 120 100 H 140" strokeWidth="1" />
    <path d="M60 100 V 140 M 140 100 V 140" />
    <line x1="0" y1="140" x2="200" y2="140" strokeWidth="2" />
  </svg>
);
