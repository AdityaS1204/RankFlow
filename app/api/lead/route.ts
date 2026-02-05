import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, site, email, phone, source } = body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log("Submission Attempt:", { name, site, email, phone, source });
    console.log("Env Check:", { hasToken: !!BOT_TOKEN, hasChatId: !!CHAT_ID });

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram credentials missing in .env.local');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const message = `
🚀 *New Lead from RankFlow!*
-------------------------
👤 *Name:* ${name}
🌐 *Site:* ${site}
📧 *Email:* ${email}
📞 *Phone:* ${phone || 'Not provided'}
🔍 *Source:* ${source}
-------------------------
    `;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error Response:', errorData);
      throw new Error(`Telegram API failed: ${errorData.description || 'Unknown error'}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
