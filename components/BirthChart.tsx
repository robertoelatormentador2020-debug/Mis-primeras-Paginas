
import React from 'react';
import { PlanetaryPosition } from '../types';

interface BirthChartProps {
  positions: PlanetaryPosition[];
}

const BirthChart: React.FC<BirthChartProps> = ({ positions }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-cinzel text-yellow-500">Planetary Alignment</h2>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-slate-400">Sacred</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-slate-600"></span>
            <span className="text-slate-400">Non-Sacred</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {positions.map((p) => (
          <div 
            key={p.name}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
              p.isSacred 
                ? 'bg-yellow-500/5 border-yellow-500/20 hover:border-yellow-500/40' 
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${p.isSacred ? 'bg-yellow-500/20 text-yellow-500' : 'bg-slate-800 text-slate-400'}`}>
                <i className={`fas fa-${p.name.toLowerCase() === 'sun' ? 'sun' : p.name.toLowerCase() === 'moon' ? 'moon' : 'globe'}`}></i>
              </div>
              <div>
                <p className={`font-bold text-sm ${p.isSacred ? 'text-yellow-100' : 'text-slate-300'}`}>{p.name}</p>
                <p className="text-xs text-slate-500">{p.degree}° {p.sign}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-600 block">House</span>
              <span className="text-sm font-cinzel text-slate-400">{p.house}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthChart;
