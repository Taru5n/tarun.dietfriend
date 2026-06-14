import { GenomicArchetype, WellnessMedia } from "./types";

export const GENOMIC_ARCHETYPES: Record<string, GenomicArchetype> = {
  "fat-loss-low-carb": {
    name: "Lipolytic Metabolic Responder",
    code: "G-ARCH-LIPO-V2",
    description: "Your cells are highly efficient at fatty-acid oxidation (lipolysis) when carbohydrate levels are moderate or low. Your genetic indicators suggest that your insulin receptors are highly responsive to low-glycemic inputs daily.",
    carbTolerance: 35,
    methylationEfficiency: 74,
    lipolyticOxidation: "high",
    satietyPeptideResponse: "delicate",
    targetMacros: {
      protein: 30,
      carbs: 20,
      fats: 50,
      caloriesEstimate: 1650,
    },
    recommendedSuperfoods: ["Avocado", "Wild Salmon", "Spinach", "Chia Seeds", "Macadamia Nuts", "Extra Virgin Olive Oil"],
    scientificInsights: [
      "Optimized MTHFR pathway absorption, benefiting from folate-rich dark leafy greens rather than synthetic folic acid.",
      "Highly responsive ADRB2 gene, improving lipolysis efficiency during light aerobic activity.",
      "Delicate satiety peptide-YY response time; eating smaller, high-protein portions every 3-4 hours prevents sudden cravings."
    ],
  },
  "muscle-gain": {
    name: "Glycolytic Kinetic Hypertrophier",
    code: "G-ARCH-KINE-M3",
    description: "Your fibers are geared for optimal muscle glycogen replenishment. You synthesize proteins rapidly under moderate carbohydrate loads, making carbs active catalysts for recovery rather than fat storage.",
    carbTolerance: 85,
    methylationEfficiency: 82,
    lipolyticOxidation: "moderate",
    satietyPeptideResponse: "fast",
    targetMacros: {
      protein: 30,
      carbs: 45,
      fats: 25,
      caloriesEstimate: 2400,
    },
    recommendedSuperfoods: ["Sweet Potatoes", "Chicken Breast", "Liquid Amino Acids", "Blueberries", "Greek Yogurt", "Pumpkin Seeds"],
    scientificInsights: [
      "High ACTN3 gene expression, indicating pre-dominance of fast-twitch athletic muscle fibers which thrive on complex carbohydrates.",
      "Efficient glucose transport (GLUT4 channel density), directing starches directly to glycogen stores.",
      "Satiety hormones respond quickly, meaning highly structured, planned meals keep energy levels stable without dips."
    ],
  },
  "balanced-energy": {
    name: "Homeostatic Oxidative Adaptor",
    code: "G-ARCH-HOMEO-S7",
    description: "A highly resilient genetic profile that easily shifts between burning glycogen and fat. Your biological rhythm thrives on a perfect balance of unrefined grains, clean protein, and botanical polyunsaturated fats.",
    carbTolerance: 60,
    methylationEfficiency: 68,
    lipolyticOxidation: "efficient",
    satietyPeptideResponse: "moderate",
    targetMacros: {
      protein: 25,
      carbs: 40,
      fats: 35,
      caloriesEstimate: 1950,
    },
    recommendedSuperfoods: ["Quinoa", "Walnuts", "Tempeh", "Sardines", "Lentils", "Steamed Broccoli"],
    scientificInsights: [
      "TCF7L2 gene variance indicates highly generalist carb accommodation without inflammation markers.",
      "Optimal cellular ATP generation through mitochondrial respiration, thrives on dense micronutrient variety.",
      "Normal leptin receptor behavior. Eating mindfully with aesthetic visual plates satisfies both your mind and body."
    ],
  },
  "gut-micronutrient": {
    name: "Fiber-Rich Phytochemical Synthesizer",
    code: "G-ARCH-PHYTO-X10",
    description: "Your genetic markers indicate high sensitivity to cellular oxidative pathways and gut microbiome signaling. Your body is built to extract secondary vitamins and minerals from complex fibrous matrices.",
    carbTolerance: 70,
    methylationEfficiency: 90,
    lipolyticOxidation: "moderate",
    satietyPeptideResponse: "moderate",
    targetMacros: {
      protein: 20,
      carbs: 55,
      fats: 25,
      caloriesEstimate: 1800,
    },
    recommendedSuperfoods: ["Kimchi / Sauerkraut", "Artichokes", "Blackberries", "Sprouted Lentils", "Turmeric Root", "Garlobanzo beans"],
    scientificInsights: [
      "FUT2 gene indicators suggest strong prebiotic support is required to sustain your gut barrier defense.",
      "Exceptional glutathione synthesis efficiency, making colorful antioxidant foods double-effective for your immune system.",
      "Thrives on diverse prebiotic plant starches to power secondary metabolite creation for energy."
    ]
  }
};

// Curated beautiful aesthetic videos (using high quality, high vibe embedding of recipe, stretching & self-love food habits)
export const WELLNESS_VIDEOS: WellnessMedia[] = [
  {
    id: "v1",
    title: "10-Minute Color-Rich Aesthetic Lunch Prep",
    category: "recipes",
    duration: "10 min",
    youtubeId: "F-gGInmGAXk", // Highly popular, aesthetic and live embed allowed video
    description: "A visually beautiful tutorial showing how to toss a high-antioxidant, vibrant green and mango energy bowl. Fast, fresh, and soothing to watch.",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "v2",
    title: "Supportive Mindful Eating Ritual with Coach Sam",
    category: "coach-talk",
    duration: "5 min",
    youtubeId: "PUP7U5vT0zo", // Indestructible embed-friendly cooking tutorial
    description: "Sit with our warm Coach Sam in a peaceful kitchen to learn how to make friends with your plate, release any food shame, and eat intuitively.",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "v3",
    title: "Morning Flow Activation & Warm Elixir Ritual",
    category: "comfort",
    duration: "8 min",
    youtubeId: "vM4vG1qMpyE", // Clean living healthy lifestyle meal prep
    description: "Gentle stretching coupled with preparing an easy ginger-honey tea profile to wake up your stomach and soothe your nervous system.",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
  }
];

export const QUICK_DOUBTS = [
  {
    id: "c1",
    label: "Feeling guilty about a sweet cheat 🍰",
    prompt: "I just ended up eating a slice of cake/sweet treat, and I'm feeling guilty. Talk to me like a real friend—how do I reset physically and emotionally without any stress?"
  },
  {
    id: "c2",
    label: "Make me a customized shopping list 🛒",
    prompt: "Based on my personalized Nutri-Genomic archetype profile, please create a friendly 5-minute grocery shopping list divided into simple departments. Put some encouraging notes beside them!"
  },
  {
    id: "c3",
    label: "Super quick 5-min recipe hack 🍳",
    prompt: "Hey Sam! I'm super exhausted today and don't feel like cooking of clean up, but I still want to nourish my body. What is the ultimate lazy, friendly 5-minute recipe hack for my archetype?"
  },
  {
    id: "c4",
    label: "How to handle bloating/tummy distress 🍵",
    prompt: "My stomach feels highly bloated and uncomfortable after my last meal. Translate what's happening scientifically in a gentle, warm way, and give me a friendly natural elixir potion or ritual I can make right now to feel awesome."
  }
];

export const SAMPLE_MEAL_PLANS: Record<string, Array<{ meal: string, name: string, desc: string, carbs: string, prot: string, fats: string }>> = {
  "G-ARCH-LIPO-V2": [
    { meal: "Sunshine Breakfast", name: "Fluffy Avocado Scramble", desc: "Two pasture scrambled eggs with spinach folded in, topped with half an avocado, fresh coriander, and a splash of lime juice.", carbs: "4g", prot: "16g", fats: "24g" },
    { meal: "Vibrant Lunch", name: "Mango Sesame Salmon Platter", desc: "Seared wild salmon over baby rocket, diced avocado, mango wedges, cucumber ribbons, and rich toasted sesame sprinkle.", carbs: "12g", prot: "28g", fats: "22g" },
    { meal: "Mid-Day Glow Snack", name: "Crunchy Sea-Salt Macadamia Mix", desc: "A handful of dry-roasted macadamias and raw pumpkin seeds to steady your energy levels through the afternoon slump.", carbs: "3g", prot: "5g", fats: "18g" },
    { meal: "Comforting Dinner", name: "Garlic herb Chicken on Zoodles", desc: "Zucchini ribbons tossed in pressed garlic and local olive oil, loaded with tender herb roasted chicken tenderloins.", carbs: "6g", prot: "30g", fats: "14g" },
  ],
  "G-ARCH-KINE-M3": [
    { meal: "Sunshine Breakfast", name: "Wildberry Quinoa Maple Bowl", desc: "Hot steamed quinoa simmered in raw almond milk, loaded with raspberries, pumpkin seeds, a rich drizzle of maple syrup.", carbs: "48g", prot: "12g", fats: "8g" },
    { meal: "Vibrant Lunch", name: "Maple Tempeh & Sweet Potato Bento", desc: "Golden pan-seared tempeh cubes with thick baked sweet potato discs, steamed broccoli crowns, and clean coconut amino dip.", carbs: "52g", prot: "22g", fats: "10g" },
    { meal: "Mid-Day Glow Snack", name: "Blueberry Protein Whip", desc: "Organic Greek yogurt (or plant whip) folded with blended frozen blueberries and a generous crunch of sunflower kernels.", carbs: "18g", prot: "18g", fats: "5g" },
    { meal: "Comforting Dinner", name: "Turmeric Rice & Citrus Chicken Bowl", desc: "Warm fluffy turmeric-spiced rice topped with strips of lean citrus chicken breast, raw grated carrot, and fresh snow peas.", carbs: "45g", prot: "34g", fats: "6g" },
  ],
  "G-ARCH-HOMEO-S7": [
    { meal: "Sunshine Breakfast", name: "Sprouted Sourdough Avocado Toast", desc: "One toasted wedge of sprouted grain bread, loaded with mashed avocado, cherry tomatoes, and a soft-poached egg.", carbs: "22g", prot: "13g", fats: "14g" },
    { meal: "Vibrant Lunch", name: "Warm Quinoa Crunch Salad", desc: "Steamed fluffy quinoa tossed with shredded purple cabbage, shaved edamame beans, and a creamy sesame tahini dressing.", carbs: "32g", prot: "12g", fats: "16g" },
    { meal: "Mid-Day Glow Snack", name: "Walnut Apple Crunch", desc: "Crisp cold apple slices with raw walnut halves, an beautiful fiber-fat pairing that stimulates satiety peptide-YY.", carbs: "15g", prot: "3g", fats: "10g" },
    { meal: "Comforting Dinner", name: "Rainbow Trout & Asparagus Bake", desc: "Baked mountain trout fillet brushed with thyme infused olive oil, roasted asparagus spears, and half a roasted yam.", carbs: "25g", prot: "28g", fats: "14g" },
  ],
  "G-ARCH-PHYTO-X10": [
    { meal: "Sunshine Breakfast", name: "Golden Gut-Healer Porridge", desc: "Old-fashioned steel-cut oats simmered with turmeric, freshly grated ginger, almond milk, topped with kiwi wheels and hemp seeds.", carbs: "42g", prot: "10g", fats: "11g" },
    { meal: "Vibrant Lunch", name: "Prebiotic Micro-Biome Feast", desc: "Kimchi, warm cooked chickpeas, steamed artichoke hearts, and roasted beetroot slices bedded on fresh mixed romaine greens.", carbs: "38g", prot: "14g", fats: "8g" },
    { meal: "Mid-Day Glow Snack", name: "Berry Antioxidant Shake", desc: "Creamy liquid mix of blackberries, sprouted flaxseed grounds, young spinach, and fresh young coconut water.", carbs: "14g", prot: "4g", fats: "6g" },
    { meal: "Comforting Dinner", name: "Lentil Dahl & Steamed Greens", desc: "Warm, fragrant cumin-spiced red lentil dahl served over steamed baby bok choy and sprinkled with black sesame seeds.", carbs: "34g", prot: "16g", fats: "5g" },
  ]
};

export function computeNutriGenomicArchetype(profile: {
  weight: number;
  height: number;
  age: number;
  activity: string;
  goal: string;
  dietType: string;
}): GenomicArchetype {
  // Simple deterministic biological engine mapping metrics directly to customized, high-science presets!
  if (profile.goal === "muscle-gain") {
    const base = { ...GENOMIC_ARCHETYPES["muscle-gain"] };
    // Adjust calorie formula dynamically so the result matches their physical size
    const bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 100;
    base.targetMacros.caloriesEstimate = Math.round(bmr * 1.5);
    return base;
  }
  
  if (profile.goal === "fat-loss" || profile.dietType === "keto" || profile.dietType === "low-carb") {
    const base = { ...GENOMIC_ARCHETYPES["fat-loss-low-carb"] };
    const bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 50;
    base.targetMacros.caloriesEstimate = Math.round(bmr * 1.15);
    // Add custom superfood based on diet
    if (profile.dietType === "vegan") {
      base.recommendedSuperfoods = ["Avocado", "Nutritional Yeast", "Spinach", "Chia Seeds", "Pumpkin Seeds", "Extra Virgin Olive Oil"];
    }
    return base;
  }

  if (profile.goal === "gut-health" || profile.dietType === "vegan" || profile.dietType === "vegetarian") {
    const base = { ...GENOMIC_ARCHETYPES["gut-micronutrient"] };
    const bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age;
    base.targetMacros.caloriesEstimate = Math.round(bmr * 1.35);
    return base;
  }

  // Default balanced homeostatic
  const base = { ...GENOMIC_ARCHETYPES["balanced-energy"] };
  const bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age;
  base.targetMacros.caloriesEstimate = Math.round(bmr * 1.3);
  return base;
}
