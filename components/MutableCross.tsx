
import React from 'react';

interface MutableCrossProps {
  ac: string;
  dc: string;
  mc: string;
  ic: string;
}

const MutableCross: React.FC<MutableCrossProps> = ({ ac, dc, mc, ic }) => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
      
      <div className="flex items-center gap-4 mb-10 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
          <i className="fas fa-crosshairs"></i>
        </div>
        <div>
          <h3 className="text-2xl font-cinzel text-yellow-500/90 tracking-widest">SÍNTESIS DE LA CRUZ MUTABLE</h3>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium">Tensión Dinámica: El Místico vs El Filósofo</p>
        </div>
      </div>

      <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center mb-10">
        {/* Orbes de fondo */}
        <div className="absolute inset-0 border border-slate-800/50 rounded-full scale-110"></div>
        <div className="absolute inset-0 border border-slate-800/50 rounded-full scale-90"></div>
        
        {/* Líneas de la Cruz con gradientes */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
        
        {/* Círculo Central Sagrado */}
        <div className="absolute w-24 h-24 rounded-full border border-yellow-500/20 bg-slate-950/90 z-10 flex flex-col items-center justify-center shadow-inner">
          <div className="w-16 h-16 border border-slate-800 rounded-full flex items-center justify-center animate-spin-slow">
             <i className="fas fa-dharmachakra text-yellow-500/40 text-xl"></i>
          </div>
          <span className="text-yellow-500/60 font-cinzel text-[8px] absolute tracking-widest">NÚCLEO</span>
        </div>

        {/* Puntos Cardinales - MC Sagitario (Fuego) */}
        <div className="absolute top-0 -translate-y-1/2 flex flex-col items-center z-20 group-hover:-translate-y-2 transition-all duration-500">
          <div className="bg-slate-900 border border-yellow-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-yellow-400 mb-3 shadow-lg">MC SAGITARIO</div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]"></div>
          <span className="text-slate-400 font-cinzel text-sm mt-2">{mc}</span>
        </div>
        
        {/* IC Géminis (Aire) */}
        <div className="absolute bottom-0 translate-y-1/2 flex flex-col items-center z-20 group-hover:translate-y-2 transition-all duration-500">
          <span className="text-slate-400 font-cinzel text-sm mb-2">{ic}</span>
          <div className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
          <div className="bg-slate-900 border border-blue-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-blue-400 mt-3 shadow-lg">IC GÉMINIS</div>
        </div>

        {/* AC Piscis (Agua) */}
        <div className="absolute left-0 -translate-x-1/2 flex items-center z-20 group-hover:-translate-x-2 transition-all duration-500">
          <div className="flex flex-col items-end mr-3">
            <div className="bg-slate-900 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-400 mb-2 shadow-lg">AC PISCIS</div>
            <span className="text-slate-400 font-cinzel text-sm">{ac}</span>
          </div>
          <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
        </div>

        {/* DC Virgo (Tierra) */}
        <div className="absolute right-0 translate-x-1/2 flex items-center z-20 group-hover:translate-x-2 transition-all duration-500">
          <div className="w-3 h-3 bg-rose-400 rounded-full shadow-[0_0_10px_#fb7185]"></div>
          <div className="flex flex-col items-start ml-3">
            <div className="bg-slate-900 border border-rose-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-rose-400 mb-2 shadow-lg">DC VIRGO</div>
            <span className="text-slate-400 font-cinzel text-sm">{dc}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm relative z-10">
        <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <i className="fas fa-square-root-alt text-indigo-400"></i>
            <h4 className="text-indigo-300 font-cinzel font-bold">Cuadratura AC-MC (La Excepción)</h4>
          </div>
          <p className="text-slate-400 leading-relaxed italic text-xs">
            "Tu Ascendente en Piscis (el Místico) forma una cuadratura dinámica con tu MC en Sagitario (el Buscador de la Verdad). Esta configuración es una 'excepción' de alta frecuencia: no solo sueñas con lo divino, sino que estás impulsado a teorizarlo y enseñarlo como una filosofía de vida expansiva."
          </p>
        </div>
        <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
           <div className="flex items-center gap-2 mb-3">
            <i className="fas fa-infinity text-emerald-400"></i>
            <h4 className="text-emerald-300 font-cinzel font-bold">El Servicio Transmutador</h4>
          </div>
          <p className="text-slate-400 leading-relaxed italic text-xs">
            "Al tener el eje Piscis-Virgo activado, tu alma transmuta el caos en orden sagrado. Tu Ascendente Piscis a los 26° indica una culminación de sabiduría emocional que debe ser anclada mediante la practicidad técnica de tu Descendente en Virgo."
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MutableCross;
