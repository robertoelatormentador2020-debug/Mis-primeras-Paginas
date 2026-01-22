
import React from 'react';
import { KarmicData } from '../types';

interface KarmicSectionProps {
  data: KarmicData;
}

const KarmicSection: React.FC<KarmicSectionProps> = ({ data }) => {
  return (
    <div className="card-temple rounded-[2.5rem] p-8 border border-orange-500/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
          <i className="fas fa-history"></i>
        </div>
        <div>
          <h3 className="text-2xl font-cinzel text-orange-300 tracking-widest uppercase">Linaje Kármico</h3>
          <p className="text-slate-500 text-[9px] tracking-[0.2em] uppercase font-bold">Vidas Pasadas y Contratos del Alma</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-orange-500/50 uppercase tracking-widest block mb-1">Nodo Sur (Don Ancestral)</span>
            <p className="text-slate-300 text-sm italic">"{data.nodeSouthMeaning}"</p>
          </div>
          <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-emerald-500/50 uppercase tracking-widest block mb-1">Nodo Norte (Evolución)</span>
            <p className="text-slate-300 text-sm italic">"{data.nodeNorthMeaning}"</p>
          </div>
        </div>
        
        <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800">
          <h4 className="text-sm font-cinzel text-orange-400 mb-4 flex items-center gap-2">
            <i className="fas fa-scroll text-xs opacity-50"></i> Lecciones de Vida
          </h4>
          <ul className="space-y-3">
            {data.karmaLessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs text-slate-400 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                {lesson}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner">
        <h4 className="text-xs font-cinzel text-indigo-400 mb-2 uppercase tracking-widest">Contrato del Alma</h4>
        <p className="text-slate-300 text-sm leading-relaxed">{data.soulContract}</p>
      </div>
    </div>
  );
};

export default KarmicSection;
