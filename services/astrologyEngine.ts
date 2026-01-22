
import { PlanetaryPosition, RayType, EsotericProfile } from "../types";
import { ZODIAC_SIGNS, SACRED_PLANETS, NON_SACRED_PLANETS } from "../constants";

// In a real app, this would use the Swiss Ephemeris or a similar library.
// For this demo, we generate pseudo-accurate positions based on the birth date.
export const calculatePositions = (dateStr: string): PlanetaryPosition[] => {
  const seed = new Date(dateStr).getTime();
  const planets = [...SACRED_PLANETS, ...NON_SACRED_PLANETS];
  
  return planets.map((name, index) => {
    const planetSeed = seed + (index * 1000000);
    const signIndex = Math.floor((planetSeed / 86400000) % 12);
    const degree = Math.floor((planetSeed / 3600) % 30);
    
    return {
      name,
      sign: ZODIAC_SIGNS[signIndex],
      degree,
      house: (signIndex % 12) + 1,
      isSacred: SACRED_PLANETS.includes(name),
      retrograde: (planetSeed % 5) === 0
    };
  });
};

export const determineRays = (dateStr: string): EsotericProfile => {
  const seed = new Date(dateStr).getTime();
  const rayValues = Object.values(RayType);
  
  const getRay = (offset: number) => rayValues[(seed + offset) % rayValues.length];

  return {
    monadRay: getRay(1),
    soulRay: getRay(2),
    personalityRay: getRay(3),
    mentalBodyRay: getRay(4),
    astralBodyRay: getRay(5),
    physicalBodyRay: getRay(6),
    starseedOrigin: ["Sirius", "Pleiades", "Andromeda", "Arcturus", "Lyra"][(seed % 5)]
  };
};
