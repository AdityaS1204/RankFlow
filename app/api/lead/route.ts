import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { AuditConfirmationEmail } from '@/components/emails/AuditConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // ── 1. Send Telegram notification ─────────────────────────────────────
    const message = `
🚀 *New Lead from RankFlow!*
-------------------------
👤 *Name:* ${name}
🌐 *Site:* ${site}
📧 *Email:* ${email}
📞 *Phone:* ${phone || 'Not provided'}
🔍 *Source:* ${source}
    `;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API Error:', errorData);
      throw new Error(`Telegram API failed: ${errorData.description || 'Unknown error'}`);
    }

    // ── 2. Send welcome email via Resend ───────────────────────────────────
    const firstName = name?.split(' ')[0] || 'there';

    const { error: resendError } = await resend.emails.send({
      from: 'Aditya from Rankflow <aditya@updates.rankflow.in>',
      to: [email],
      subject: 'Your rankflow.in SEO Audit is Coming (24 hrs)',
      react: AuditConfirmationEmail({ firstName, website: site }),
    });

    if (resendError) {
      // Non-fatal: Telegram succeeded, lead is captured — just log the email failure
      console.error('Resend email error:', resendError);
    } else {
      console.log('Welcome email sent to:', email);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
