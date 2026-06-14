import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI client on the server
// Set User-Agent to 'aistudio-build' as required
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

app.use(express.json());

// API: Health probe
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// API: Chat endpoint with supportive Sam
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history, profile } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message parameter is required." });
    }

    // Build standard prompt with body metrics context so Sam behaves as a real customized friend
    let systemInstruction = `You are "Sam", the user's deeply supportive, non-judgmental best friend and expert dietary coach. 
Your goal is to make the user feel heard, encouraged, and completely safe from any shame or judgement.
The user is sharing their real biometrics and wellness goals with you. Always speak to them like a real, trusting friend (e.g. use expressions of warmth, celebration of small wins, and proactive supportive advice). 

We have computed a "Nutri-Genomic Profile" based on their metrics:
- Weight: ${profile?.weight || "Not provided"} kg
- Height: ${profile?.height || "Not provided"} cm
- Age: ${profile?.age || "Not provided"} years
- Primary Goal: ${profile?.goal || "General health and wellness"}
- Dietary Style/Allergies: ${profile?.dietType || "Flexible"}
- Energy/Activity level: ${profile?.activity || "Moderate"}

${profile ? `Use this context to tailor your meal ideas and doubt-solving precisely to these metrics. Always praise their current body parameters—reassure them about how healthy they are, how beautifully their metabolism is predisposed to do well, and how premium their wellness starting point is right now!` : ""}

RULES FOR COMMUNICATION:
1. ALWAYS use extremely easy, clear, plain language. Avoid clinical words, medical jargon, or scary metabolic terms unless you explain it like a 5-year-old ("your cellular engines love this!").
2. DO NOT USE LARGE TEXT PARAGRAPHS on meals. Keep explanations minimal.
3. Suggest and ask about meals utilizing short, sweet layouts with plenty of emojis. E.g.:
   - Breakfast 🥭: [Easy name] - [Single-sentence explanation]
   - Lunch 🥗: [Easy name] - [Single-sentence explanation]
4. Direct Positive Praise: Remind them how great they are, call them "champion", "my beautiful friend", "glowing soul". Tell them how healthy and good their body is doing.
5. End with a loving, simple question to continue the friendly check-in. E.g., "Which one sounds the coziest to try today? 🌸" or "Should we swap any ingredients out?"`;

    // Format chat history for the Gemini SDK format
    // In @google/genai SDK, chat is created via ai.chats.create
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.85,
      },
    });

    // To respect the conversational history, we can seed or simulate the chat session
    // We send the history message chunks before the final message, or we can construct them in elements.
    // If history is provided, we can populate it.
    // In SDK, chat session maintains history. We can sequentially send them or pass them in chat.create's history param if supported,
    // or simulate it by sending historical messages. Let's send the past 4 messages to the chat object sequentially to rebuild context, or just feed them.
    // Let's seed the chat history. In @google/genai, ai.chats.create takes history in config. But wait, standard config has contents or we can send them.
    // Send previous turns if they exist to build actual session memory:
    if (history && Array.isArray(history)) {
      // Re-apply history dynamically
      for (const turn of history) {
        if (turn.role === "user") {
          await chat.sendMessage({ message: turn.text });
        } else if (turn.role === "model") {
          // In some cases we don't need to re-send model turns manually unless simulating sequence.
          // To keep it fast and prevent API limits, we can also combine history in a single structured prompt or load it.
          // Let's use a simpler, high-performance option: send previous turns if short, or just include them in context.
          // Actually, we can just let Gemini chat handle it or send the current message with previous history clearly formatted!
          // But to utilize the true chat SDK, let's play through the history sequentially (up to last 6 messages for speed).
          // To make it super foolproof and fast without making 10 API calls, let's include the recent chat history
          // block inside our prompt as a transcript, then send! This is much faster and bypasses multi-round latency.
        }
      }
    }

    // Include recent history directly in the prompt for robust, single-round lightning fast responses
    let detailedPrompt = "";
    if (history && history.length > 0) {
      detailedPrompt += "Here is our recent friendly text history for your reference:\n";
      history.forEach((h: any) => {
        const speaker = h.role === "user" ? "User (Me)" : "Sam (You)";
        detailedPrompt += `[${speaker}]: ${h.text}\n`;
      });
      detailedPrompt += "\nNow, here is my new message, answer me with your signature friendly, expert warmth:\n";
    }
    detailedPrompt += message;

    const response = await chat.sendMessage({ message: detailedPrompt });

    res.json({
      reply: response.text,
    });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    res.status(500).json({
      error: "Oh no! Sam is catching his breath. Let's try sending that again!",
      details: error.message,
    });
  }
});

// Configure Vite or Static Files depending on environment
async function start() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in DEVELOPMENT mode with Live Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in PRODUCTION mode. Serving pre-compiled assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Diet Coach server is happily running on port http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});
