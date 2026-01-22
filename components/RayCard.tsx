
import React from 'react';
import { RayType } from '../types';
import { RAYS_DESCRIPTIONS } from '../constants';

interface RayCardProps {
  label: string;
  ray: RayType;
  colorClass: string;
}

const RayCard: React.FC<RayCardProps> = ({ label, ray, colorClass }) => {
  const rayNumber = ray.split(" - ")[0];
  const rayName = ray.split(" - ")[1];

  return (
    <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-3xl hover:border-yellow-500/30 transition-all group overflow-hidden relative shadow-lg">
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-10 ${colorClass}`}></div>
      <h4 className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] mb-4 ml-1">{label}</h4>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-inner ${colorClass} text-white/90`}>
          {rayNumber}
        </div>
        <h3 className="text-2xl font-cinzel text-slate-100 tracking-wider">{rayName}</h3>
      </div>
      <div className="h-[1px] w-full bg-slate-800/50 mb-4"></div>
      <p className="text-slate-400 text-xs leading-relaxed italic font-light">
        "{RAYS_DESCRIPTIONS[ray as keyof typeof RAYS_DESCRIPTIONS]}"
      </p>
    </div>
  );
};

export default RayCard;
