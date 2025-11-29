import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Background } from "./components/Background";
import { CountdownTimer } from "./components/CountdownTimer";
import { EventDetails } from "./components/EventDetails";
import { Header } from "./components/Header";
import { InvitationCover } from "./components/InvitationCover";
import { RsvpForm } from "./components/RsvpForm";
import { CakeSVG } from "./components/Icons";
import sound from "./files/sound.mp3";

// --- Main Component ---

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // eslint-disable-next-line no-undef
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const MUSIC_URL = sound;

  useEffect(() => {
    // eslint-disable-next-line no-undef
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
  }, [MUSIC_URL]);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Autoplay prevented", e));
      setIsPlaying(true);
    }

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#87CEEB", "#FFFFFF"],
      zIndex: 1000
    });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // --- Render: Pantalla de "Sobre Cerrado" ---
  if (!isOpen) {
    return (
      <>
        <GlobalStyles />
        <InvitationCover onOpen={handleOpen} />
      </>
    );
  }

  // --- Render: Invitación Abierta ---
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-white text-slate-800 font-body relative overflow-x-hidden">
      {/* Importamos las fuentes también aquí por si acaso */}
      <GlobalStyles />
      <Background />

      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur p-2 rounded-full shadow-md text-blue-900 border border-blue-100"
      >
        {isPlaying ? <Music size={20} className="animate-pulse" /> : <VolumeX size={20} />}
      </button>

      <Header />

      <CountdownTimer targetDate={new Date("2025-12-20T17:00:00")} />

      {/* NUEVO: Pastel de Cumpleaños */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center relative z-20 mb-6"
      >
        <CakeSVG className="w-32 h-32 drop-shadow-md" />
      </motion.div>

      {/* Detalles del Evento */}
      <main className="max-w-md mx-auto px-6 py-6 space-y-6 relative z-10">
        <EventDetails />

        {/* Formulario RSVP */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 relative"
        >
          <RsvpForm />
        </motion.div>
      </main>

      <footer className="text-center py-8 px-4 text-slate-400 text-xs relative z-10 font-body">
        <p>Con amor, la familia de Thiago</p>
      </footer>
    </div>
  );
}

const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap');
      .font-royal { font-family: 'Fredoka', sans-serif; }
      .font-body { font-family: 'Nunito', sans-serif; }
    `}
  </style>
);
