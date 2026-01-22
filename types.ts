
export enum RayType {
  Ray1 = "1 - Will & Power",
  Ray2 = "2 - Love-Wisdom",
  Ray3 = "3 - Active Intelligence",
  Ray4 = "4 - Harmony through Conflict",
  Ray5 = "5 - Concrete Science",
  Ray6 = "6 - Devotion & Idealism",
  Ray7 = "7 - Ceremonial Order & Magic"
}

export interface PlanetaryPosition {
  name: string;
  sign: string;
  degree: number;
  minutes?: number;
  house: number;
  isSacred: boolean;
  retrograde: boolean;
}

export interface UserBirthData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthLocation: string;
  vocation: string;
}

export interface EsotericProfile {
  monadRay: RayType;
  soulRay: RayType;
  personalityRay: RayType;
  mentalBodyRay: RayType;
  astralBodyRay: RayType;
  physicalBodyRay: RayType;
  starseedOrigin?: string;
}

export interface KarmicData {
  nodeSouthMeaning: string;
  nodeNorthMeaning: string;
  karmaLessons: string[];
  soulContract: string;
}

export interface StarseedProfile {
  originType: string;
  mission: string;
  archetype: string;
  missionKeywords: string[];
}

export interface AstrologyReading {
  summary: string;
  akashicInsights: string;
  soulPurpose: string;
  starseedHistory: string;
  axisAnalysis: string;
  stelliumInsights: string;
  karmicLineage: KarmicData;
  starseedProfile: StarseedProfile;
}

export interface ChartAnalysisRequest {
  birthData: UserBirthData;
  positions: PlanetaryPosition[];
  axis: {
    ac: string;
    dc: string;
    mc: string;
    ic: string;
  };
}
