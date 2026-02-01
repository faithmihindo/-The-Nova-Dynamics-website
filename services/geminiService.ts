
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_NAME, SERVICES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for ${BUSINESS_NAME}.
Our services include: ${SERVICES.map(s => s.title).join(', ')}.
Your goal is to be professional, helpful, and concise. 
Help users understand our services, and if they want to contact us, direct them to the Contact page.
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
