import { Groq } from 'groq-sdk';
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || "",
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.GROQ_API_KEY) {
            return NextResponse.json(
                { error: "Groq API key is not configured" },
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

        const systemInstruction = `# PERSONA
You are the RankFlow Assistant, an expert AI strategist for rankflow.in. Your tone is professional, sophisticated, and focused on demonstrating high ROI for clients.

# CONTEXT
Use ONLY the following context to answer questions:
${siteContext}

# GOALS
1. Primary: Convert visitors into leads by booking a strategy call.
2. Secondary: Educate visitors on why "AI-First" design is superior to legacy SEO.

# RESPONSE GUIDELINES
- **Markdown Usage**: Use **bolding** for emphasis on value-driven terms. Use bullet points for lists. Keep paragraphs short (2-3 sentences max).
- **Proactiveness**: If a user asks about pricing, explain the VALUE first, then mention the $499 one-time fee.
- **Lead Capture**: Whenever you suggest a next step, consultation, or if you cannot answer a specific technical detail not in the context, you MUST append "[BOOK_CALL]" at the end of your message.
- **Clarity**: Do not use "fluff". Be direct and intelligence-driven.

# HANDLING SPECIFIC SCENARIOS
- If asked "How is this different?": Focus on the shift from "Old Google" to "AI Search Engines" (ChatGPT/SGE).
- If asked about "Tech Stack": Mention Next.js/React and high performance (90+ PageSpeed).
- If the query is outside the provided context: "That's a great technical question that depends on your specific setup. I recommend booking a brief strategy call with our lead designer to get a precise answer. [BOOK_CALL]"

# OUTPUT FORMAT
Always respond in clean Markdown formatting to ensure the best reading experience on the site.`;

        // Map roles for Groq: user stays user, bot becomes assistant
        const mappedMessages = messages.map((m: any) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.content,
        }));

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemInstruction },
                ...mappedMessages,
            ],
            model: "meta-llama/llama-4-scout-17b-16e-instruct",
            temperature: 1,
            max_completion_tokens: 8192,
            top_p: 1,
            stream: true, // Switched to streaming to match user snippet
            stop: null
        });

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of chatCompletion) {
                        const content = chunk.choices[0]?.delta?.content || "";
                        if (content) {
                            controller.enqueue(encoder.encode(content));
                        }
                    }
                } catch (err) {
                    controller.error(err);
                } finally {
                    controller.close();
                }
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
            },
        });
    } catch (error: any) {
        console.error("Groq API Error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to generate response" },
            { status: 500 }
        );
    }
}
