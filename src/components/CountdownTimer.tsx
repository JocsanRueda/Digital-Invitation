import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2">
    <div className="bg-white/80 backdrop-blur-sm w-16 h-16 rounded-lg shadow-md border border-yellow-400 flex items-center justify-center mb-1">
      <span className="text-2xl font-royal text-blue-900 font-bold">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] uppercase tracking-widest text-blue-800 font-bold font-body">{label}</span>
  </div>
);

export const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // eslint-disable-next-line no-undef
        clearInterval(interval);
      }
    }, 1000);

    // eslint-disable-next-line no-undef
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex justify-center items-center relative z-20 mb-6"
    >
      <div className="flex bg-blue-50/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-blue-100">
        <TimeBox value={timeLeft.days} label="Días" />
        <div className="text-2xl font-bold text-yellow-400 mt-2">:</div>
        <TimeBox value={timeLeft.hours} label="Hrs" />
        <div className="text-2xl font-bold text-yellow-400 mt-2">:</div>
        <TimeBox value={timeLeft.minutes} label="Min" />
        <div className="text-2xl font-bold text-yellow-400 mt-2">:</div>
        <TimeBox value={timeLeft.seconds} label="Seg" />
      </div>
    </motion.div>
  );
};
