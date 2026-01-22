
import React from 'react';
import { StarseedProfile } from '../types';

interface StarseedSectionProps {
  profile: StarseedProfile;
}

const StarseedSection: React.FC<StarseedSectionProps> = ({ profile }) => {
  return (
    <div className="card-temple rounded-[2.5rem] p-8 border border-blue-500/10 relative overflow-hidden group">
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full transition-transform group-hover:scale-110 duration-1000"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
          <i className="fas fa-atom animate-spin-slow"></i>
        </div>
        <div>
          <h3 className="text-2xl font-cinzel text-blue-300 tracking-widest uppercase">Portal Galáctico</h3>
          <p className="text-slate-500 text-[9px] tracking-[0.2em] uppercase font-bold">Origen Estelar e Influencia Dimensional</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 bg-slate-950/60 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[10px] text-blue-400/50 uppercase tracking-[0.3em] block mb-2">Linaje Dominante</span>
            <p className="text-4xl font-cinzel text-white mb-4 tracking-tighter">{profile.originType}</p>
            <div className="h-[1px] w-12 bg-blue-500/30 mx-auto mb-4"></div>
            <p className="text-xs text-slate-400 italic">"{profile.archetype}"</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="p-6 bg-slate-900/40 rounded-3xl border border-slate-800">
            <h4 className="text-sm font-cinzel text-blue-300 mb-3 flex items-center gap-2">
              <i className="fas fa-rocket text-xs opacity-40"></i> Misión Terrenal
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">{profile.mission}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.missionKeywords.map((keyword, idx) => (
              <span key={idx} className="px-4 py-1.5 bg-blue-500/5 border border-blue-500/20 rounded-full text-[10px] text-blue-300 font-bold uppercase tracking-widest hover:bg-blue-500/10 transition-colors">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default StarseedSection;
