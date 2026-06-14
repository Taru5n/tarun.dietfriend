export interface PhysicalProfile {
  weight: number;
  height: number;
  age: number;
  biologicalSex: "female" | "male" | "other";
  activity: "sedentary" | "light" | "moderate" | "active" | "athlete";
  goal: "fat-loss" | "muscle-gain" | "energy" | "balanced" | "gut-health";
  dietType: "flexible" | "vegetarian" | "vegan" | "keto" | "mediterranean" | "low-carb";
  archetype?: GenomicArchetype;
}

export interface GenomicArchetype {
  name: string;
  code: string;
  description: string;
  carbTolerance: number; // 0 to 100
  methylationEfficiency: number; // 0 to 100
  lipolyticOxidation: "high" | "moderate" | "efficient";
  satietyPeptideResponse: "fast" | "moderate" | "delicate";
  targetMacros: {
    protein: number; // percentage
    carbs: number; // percentage
    fats: number; // percentage
    caloriesEstimate: number;
  };
  recommendedSuperfoods: string[];
  scientificInsights: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}

export interface JournalLog {
  id: string;
  date: string;
  feeling: "radiant" | "cozy" | "bloated" | "tired" | "unstoppable" | "content";
  note: string;
}

export interface WellnessMedia {
  id: string;
  title: string;
  category: "recipes" | "comfort" | "coach-talk";
  duration: string;
  youtubeId: string;
  description: string;
  thumbnail: string;
}
