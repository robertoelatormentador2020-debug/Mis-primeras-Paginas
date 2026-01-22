
import { GoogleGenAI, Type } from "@google/genai";
import { UserBirthData, EsotericProfile, AstrologyReading, PlanetaryPosition } from "../types";
import { STARSEED_TYPES } from "../constants";

export const generateEsotericReading = async (
  birthData: UserBirthData,
  profile: EsotericProfile,
  positions: PlanetaryPosition[],
  axis: { ac: string; mc: string }
): Promise<AstrologyReading> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const prompt = `
    Realiza una lectura astrológica esotérica profesional y multidimensional.
    Sujeto: ${birthData.name}
    Vocación Actual: ${birthData.vocation}
    Excepción de Cruz Mutable: Ascendente ${axis.ac}, Medio Cielo ${axis.mc}.
    
    Detalles de Nacimiento: ${birthData.birthDate} a las ${birthData.birthTime} en ${birthData.birthLocation}
    
    Perfil Esotérico:
    - Rayo de Mónada: ${profile.monadRay}
    - Rayo de Alma: ${profile.soulRay}
    - Rayo de Personalidad: ${profile.personalityRay}
    
    Alineación Planetaria:
    ${positions.map(p => `${p.name} en ${p.sign} Casa ${p.house} (Sagrado: ${p.isSacred})`).join(", ")}
    
    Analiza específicamente e incluye en el JSON:
    1. Alineación de la vocación actual con los rayos y stelliums.
    2. La configuración de la "Cruz Mutable" (Piscis-Sagitario).
    3. Análisis profundo de Stelliums en Casa 10 y 11.
    4. Linaje Kármico (Vidas Pasadas): Basado en el Nodo Sur y Saturno.
    5. Perfil Starseed: Selecciona UN tipo de esta lista [${STARSEED_TYPES.join(", ")}] basándote en su firma energética (especialmente Acuario/Piscis/Casas 12 y 8).
    
    Devuelve la respuesta como un objeto JSON estructurado en ESPAÑOL.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          akashicInsights: { type: Type.STRING },
          soulPurpose: { type: Type.STRING },
          starseedHistory: { type: Type.STRING },
          axisAnalysis: { type: Type.STRING },
          stelliumInsights: { type: Type.STRING },
          karmicLineage: {
            type: Type.OBJECT,
            properties: {
              nodeSouthMeaning: { type: Type.STRING },
              nodeNorthMeaning: { type: Type.STRING },
              karmaLessons: { type: Type.ARRAY, items: { type: Type.STRING } },
              soulContract: { type: Type.STRING }
            },
            required: ["nodeSouthMeaning", "nodeNorthMeaning", "karmaLessons", "soulContract"]
          },
          starseedProfile: {
            type: Type.OBJECT,
            properties: {
              originType: { type: Type.STRING },
              mission: { type: Type.STRING },
              archetype: { type: Type.STRING },
              missionKeywords: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["originType", "mission", "archetype", "missionKeywords"]
          }
        },
        required: ["summary", "akashicInsights", "soulPurpose", "starseedHistory", "axisAnalysis", "stelliumInsights", "karmicLineage", "starseedProfile"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
