import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export const EventDetails = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-t-4 border-yellow-400 flex flex-col gap-6"
    >
      {/* Fecha y Hora */}
      <div className="flex items-start gap-4">
        <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
          <Calendar size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-blue-900 font-royal">Sábado, 20 de Diciembre</h3>
          <div className="flex items-center gap-2 text-slate-500 mt-1 font-body">
            <Clock size={16} />
            <span>5:00 PM - 8:00 PM</span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100"></div>

      {/* Lugar */}
      <div className="flex items-start gap-4">
        <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
          <MapPin size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-blue-900 font-royal">Castillo de Fiestas</h3>
          <p className="text-slate-500 text-sm mt-1 font-body">Av. Real 123, Jardines del Reino.</p>
          <a href="#" className="text-yellow-600 text-xs font-bold mt-2 inline-block hover:underline font-body">VER EN MAPA</a>
        </div>
      </div>
    </motion.div>
  );
};
