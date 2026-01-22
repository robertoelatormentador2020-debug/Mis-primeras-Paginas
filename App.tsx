
import React, { useState } from 'react';
import { UserBirthData, PlanetaryPosition, EsotericProfile, AstrologyReading, RayType } from './types';
import { calculatePositions, determineRays } from './services/astrologyEngine';
import { generateEsotericReading } from './services/geminiService';
import RayCard from './components/RayCard';
import BirthChart from './components/BirthChart';
import MutableCross from './components/MutableCross';
import KarmicSection from './components/KarmicSection';
import StarseedSection from './components/StarseedSection';

const App: React.FC = () => {
  const [formData, setFormData] = useState<UserBirthData>({
    name: '',
    birthDate: '1994-01-21',
    birthTime: '10:14',
    birthLocation: 'Caracas, Venezuela',
    vocation: ''
  });
  
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [positions, setPositions] = useState<PlanetaryPosition[]>([]);
  const [profile, setProfile] = useState<EsotericProfile | null>(null);
  const [reading, setReading] = useState<AstrologyReading | null>(null);

  const loadRobertoChart = () => {
    const robData: UserBirthData = {
      name: 'Roberto Hernán Corredor',
      birthDate: '1994-01-21',
      birthTime: '10:14',
      birthLocation: 'Caracas, VEN',
      vocation: 'Ingeniero de Software / Investigador Esotérico'
    };
    
    // Exact positions from Roberto's chart images
    const robPositions: PlanetaryPosition[] = [
      { name: "Sun", sign: "Aquarius", degree: 1, house: 11, isSacred: true, retrograde: false },
      { name: "Moon", sign: "Taurus", degree: 20, house: 2, isSacred: false, retrograde: false },
      { name: "Mercury", sign: "Aquarius", degree: 12, house: 11, isSacred: true, retrograde: false },
      { name: "Venus", sign: "Aquarius", degree: 2, house: 11, isSacred: true, retrograde: false },
      { name: "Mars", sign: "Capricorn", degree: 24, house: 10, isSacred: false, retrograde: false },
      { name: "Jupiter", sign: "Scorpio", degree: 12, house: 8, isSacred: true, retrograde: false },
      { name: "Saturn", sign: "Aquarius", degree: 29, house: 12, isSacred: true, retrograde: false },
      { name: "Uranus", sign: "Capricorn", degree: 22, house: 10, isSacred: true, retrograde: false },
      { name: "Neptune", sign: "Capricorn", degree: 21, house: 10, isSacred: true, retrograde: false },
      { name: "Pluto", sign: "Scorpio", degree: 27, house: 8, isSacred: false, retrograde: false },
    ];

    const robProfile: EsotericProfile = {
      monadRay: RayType.Ray1,
      soulRay: RayType.Ray2, 
      personalityRay: RayType.Ray3,
      mentalBodyRay: RayType.Ray5,
      astralBodyRay: RayType.Ray6,
      physicalBodyRay: RayType.Ray7,
      starseedOrigin: "Sirius-Aquarius Blueprint"
    };

    setFormData(robData);
    setPositions(robPositions);
    setProfile(robProfile);
    handleGenerateWithData(robData, robProfile, robPositions);
  };

  const handleGenerateWithData = async (data: UserBirthData, prof: EsotericProfile, pos: PlanetaryPosition[]) => {
    setIsLoading(true);
    try {
      // AC 26 Pisces and MC 27 Sag are constants for Roberto's chart analysis
      const res = await generateEsotericReading(data, prof, pos, { ac: "Piscis 26°", mc: "Sagitario 27°" });
      setReading(res);
      setIsGenerated(true);
    } catch (error) {
      console.error(error);
      setIsGenerated(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const pos = calculatePositions(formData.birthDate);
    const prof = determineRays(formData.birthDate);
    setPositions(pos);
    setProfile(prof);
    handleGenerateWithData(formData, prof, pos);
  };

  return (
    <div className="min-h-screen pb-20 relative">
      <header className="relative pt-16 pb-12 px-6 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-700 mb-4 tracking-widest animate-pulse">
            ASTRA LUMINARY
          </h1>
          <div className="flex items-center justify-center gap-4 mb-2">
             <div className="h-[1px] w-12 bg-yellow-500/50"></div>
             <p className="text-yellow-500/80 text-sm md:text-md font-cinzel tracking-[0.3em] uppercase">
               Templo del Conocimiento Natal
             </p>
             <div className="h-[1px] w-12 bg-yellow-500/50"></div>
          </div>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest font-light">
            Siete Rayos • Planetas Sagrados • Registros Akáshicos
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        {!isGenerated ? (
          <div className="max-w-xl mx-auto space-y-8">
            <div className="bg-slate-900/60 backdrop-blur-2xl border border-indigo-500/20 p-10 rounded-[2rem] shadow-2xl gold-glow relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-yellow-500/20 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative">
                <h2 className="text-xl font-cinzel text-yellow-500/90 mb-8 text-center tracking-widest">Abre tu Registro Astral</h2>
                <form onSubmit={handleGenerate} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">Identidad</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-100 focus:border-yellow-500/50 outline-none transition-all placeholder:text-slate-700"
                      placeholder="Nombre Completo"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">Fecha</label>
                      <input 
                        type="date" 
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-100 focus:border-yellow-500/50 outline-none transition-all"
                        value={formData.birthDate}
                        onChange={e => setFormData({...formData, birthDate: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">Hora</label>
                      <input 
                        type="time" 
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-100 focus:border-yellow-500/50 outline-none transition-all"
                        value={formData.birthTime}
                        onChange={e => setFormData({...formData, birthTime: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">Coordenadas</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-100 focus:border-yellow-500/50 outline-none transition-all placeholder:text-slate-700"
                      placeholder="Lugar de Nacimiento"
                      value={formData.birthLocation}
                      onChange={e => setFormData({...formData, birthLocation: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">Llamado Terrenal</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-100 focus:border-yellow-500/50 outline-none transition-all pl-12 placeholder:text-slate-700"
                        placeholder="Vocación u Ocupación"
                        value={formData.vocation}
                        onChange={e => setFormData({...formData, vocation: e.target.value})}
                        required
                      />
                      <i className="fas fa-briefcase absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 text-sm"></i>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full py-5 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 text-slate-950 font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-yellow-500/10 font-cinzel tracking-widest uppercase mt-4"
                  >
                    {isLoading ? 'Invocando Sabiduría...' : 'Generar Estudio Natal'}
                  </button>
                </form>
              </div>
            </div>
            
            <button 
              onClick={loadRobertoChart}
              className="w-full py-5 bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 font-cinzel rounded-[1.5rem] hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-all flex items-center justify-center gap-4 group"
            >
              <i className="fas fa-star-of-david group-hover:rotate-180 transition-transform duration-700"></i>
              Analizar Excepción: Roberto (AC Piscis / MC Sagitario)
            </button>
          </div>
        ) : (
          <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-indigo-500/10 pb-10">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-cinzel text-yellow-500 mb-2">{formData.name}</h2>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <span className="text-slate-400 uppercase tracking-widest text-[10px] bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    {formData.vocation}
                  </span>
                  <span className="text-emerald-400 uppercase tracking-widest text-[10px] bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                    Cruz Mutable Activada
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsGenerated(false)} 
                className="px-6 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all rounded-full text-xs uppercase tracking-widest"
              >
                <i className="fas fa-arrow-left mr-2"></i> Nuevo Estudio
              </button>
            </div>

            {/* Perfil de Rayos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile && (
                <>
                  <RayCard label="La Mónada" ray={profile.monadRay} colorClass="bg-purple-600" />
                  <RayCard label="El Alma" ray={profile.soulRay} colorClass="bg-blue-600" />
                  <RayCard label="Personalidad" ray={profile.personalityRay} colorClass="bg-emerald-600" />
                </>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-12">
                {/* Nuevas Secciones Esotéricas */}
                {reading && (
                  <>
                    <StarseedSection profile={reading.starseedProfile} />
                    <KarmicSection data={reading.karmicLineage} />
                  </>
                )}

                {/* Visualización de la Cruz Mutable */}
                <MutableCross ac="Piscis 26°" dc="Virgo 26°" mc="Sagitario 27°" ic="Géminis 27°" />
                
                {/* Carta Natal Visual */}
                <BirthChart positions={positions} />
                
                {/* Lectura Generada por IA */}
                {reading && (
                  <div className="space-y-8">
                    <div className="card-temple rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"></div>
                       <h3 className="text-3xl font-cinzel text-indigo-400 mb-6 flex items-center gap-4">
                         <i className="fas fa-scroll text-yellow-500/50"></i> Síntesis Esotérica
                       </h3>
                       <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap mb-8 font-light">{reading.axisAnalysis}</p>
                       
                       <div className="h-[1px] w-full bg-slate-800 my-10"></div>

                       <h3 className="text-3xl font-cinzel text-yellow-500 mb-6 flex items-center gap-4">
                         <i className="fas fa-layer-group text-indigo-500/50"></i> Dinámica de Stelliums
                       </h3>
                       <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap font-light">{reading.stelliumInsights}</p>
                    </div>

                    <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800">
                        <h4 className="text-xl font-cinzel text-emerald-400 mb-4 tracking-widest">Propósito del Alma</h4>
                        <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-wrap font-light">{reading.soulPurpose}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar de Detalles Esotéricos */}
              <div className="space-y-8">
                <div className="card-temple rounded-[2rem] p-8 border border-yellow-500/10">
                  <h3 className="text-xl font-cinzel text-yellow-500 mb-6 flex items-center gap-3">
                    <i className="fas fa-crown text-sm opacity-50"></i> Regencia Sagrada
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex flex-col gap-1 border-b border-slate-800 pb-3">
                      <span className="text-slate-500 text-[10px] uppercase tracking-widest">Piscis (Esotérico)</span>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-200 font-medium">Plutón</span>
                        <span className="text-yellow-500/50 text-xs">Poder Transmutador</span>
                      </div>
                    </li>
                    <li className="flex flex-col gap-1 border-b border-slate-800 pb-3">
                      <span className="text-slate-500 text-[10px] uppercase tracking-widest">Sagitario (Esotérico)</span>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-200 font-medium">La Tierra</span>
                        <span className="text-yellow-500/50 text-xs">Anclaje de Visión</span>
                      </div>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-slate-500 text-[10px] uppercase tracking-widest">Acuario (Esotérico)</span>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-200 font-medium">Júpiter</span>
                        <span className="text-yellow-500/50 text-xs">Expansión Grupal</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 p-5 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                    <p className="text-xs text-indigo-300 leading-relaxed italic">
                      "Tus planetas en Acuario están regidos esotéricamente por Júpiter en Escorpio. Esto significa que tu servicio social está ligado a una regeneración profunda del inconsciente colectivo."
                    </p>
                  </div>
                </div>

                {reading && (
                  <div className="card-temple rounded-[2rem] p-8 border border-rose-500/10 text-center relative overflow-hidden group">
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-500/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                    <h3 className="text-xl font-cinzel text-rose-400 mb-6 tracking-widest">Resumen Akáshico</h3>
                    <div className="py-2">
                      <p className="text-slate-400 text-xs leading-relaxed italic">{reading.akashicInsights}</p>
                    </div>
                  </div>
                )}

                <div className="p-6 text-center opacity-30 hover:opacity-100 transition-opacity">
                   <i className="fas fa-om text-2xl text-slate-500"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-10 opacity-40 text-[10px] uppercase tracking-[0.4em] font-light">
        AstraLuminary © 2024 · Sabiduría Perenne
      </footer>
    </div>
  );
};

export default App;
