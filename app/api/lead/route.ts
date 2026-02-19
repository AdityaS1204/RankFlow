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

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram credentials missing in .env.local');
      return Response.json({ error: 'Server configuration error' }, { status: 500 });
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
      // Non-fatal — log the failure but continue to send the email
      console.error('Telegram API Error:', errorData);
    } else {
      console.log('Telegram notification sent successfully');
    }

    // ── 2. Send welcome email via Resend ───────────────────────────────────
    const firstName = name?.split(' ')[0] || 'there';

    const { data, error } = await resend.emails.send({
      from: 'Aditya from Rankflow <aditya@updates.rankflow.in>',
      to: [email],
      subject: 'Your rankflow.in SEO Audit is Coming (24 hrs)',
      react: AuditConfirmationEmail({ firstName, website: site }),
    });

    if (error) {
      console.error('Resend email error:', error);
      return Response.json({ success: true, emailError: error });
    }

    console.log('Welcome email sent:', data?.id);
    return Response.json({ success: true, emailId: data?.id });

  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Lead submission error:', message);
    return Response.json({ error: 'Submission failed', detail: message }, { status: 500 });
  }
}
