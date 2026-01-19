import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.GOOGLE_GEMINI_API_KEY) {
            return NextResponse.json(
                { error: "Gemini API key is not configured" },
                { status: 500 }
            );
        }

        // Read site context from the public markdown file
        let siteContext = "";
        try {
            const filePath = path.join(process.cwd(), "public", "rankflow-ai.md");
            siteContext = fs.readFileSync(filePath, "utf8");
        } catch (error) {
            console.error("Error reading site context:", error);
            siteContext = "RankFlow is an AI landing page agency.";
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            systemInstruction: `You are the RankFlow Assistant, a helpful AI chatbot for rankflow.in. 
      Your goal is to answer questions about RankFlow's services, pricing, and methodology.
      Use the following context to provide accurate information:
      ${siteContext}
      
      Keep your responses professional, concise, and focused on converting the visitor into a lead.
      
      IMPORTANT: Whenever you suggest booking a call or meeting, you MUST include the text [BOOK_CALL] at the very end of your message. 
      This will trigger a button for the user to book directly.
      
      If asked about something not in the context, politely direct them to book a call and add [BOOK_CALL].
      Always align with the brand voice: calm, confident, and intelligence-driven.`
        });

        const chat = model.startChat({
            history: messages.slice(0, -1).map((m: any) => ({
                role: m.role === "user" ? "user" : "model",
                parts: [{ text: m.content }],
            })),
        });

        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ content: text });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate response" },
            { status: 500 }
        );
    }
}
