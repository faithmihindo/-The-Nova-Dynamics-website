
import { GoogleGenAI } from "@google/genai";

const apiKey = (process.env.GEMINI_API_KEY || process.env.API_KEY) as string;
const ai = new GoogleGenAI({ apiKey });

const BUSINESS_NAME = "Nova Business Suite";
const SERVICES = [
  "Strategic Consulting",
  "Digital Transformation",
  "Cloud Infrastructure",
  "AI Integration"
];

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for ${BUSINESS_NAME}.
Our services include: ${SERVICES.join(', ')}.
Your goal is to be professional, helpful, and concise. 
Help users understand our services, and if they want to contact us, direct them to the Contact page (contact.html).
Always represent the business with high integrity and professionalism.
`;

export async function getChatResponse(userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our assistant is currently taking a short break. Please try again in a moment.";
  }
}
