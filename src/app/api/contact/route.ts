// //  `app/api/contact/route.ts`

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export const runtime = 'nodejs'; // Nodemailer needs Node runtime

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
//     }

//     // --- Transport: Gmail SMTP with App Password (preferred) ---
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD, // Generate in Google Account > Security > App passwords
//       },
//     });

//     const to = process.env.CONTACT_TO || process.env.GMAIL_USER!;

//     await transporter.sendMail({
//       from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
//       to,
//       replyTo: email,
//       subject: `New contact from ${name}`,
//       text: `From: ${name} <${email}>\n\n${message}`,
//       html: `
//         <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
//           <h2>New Contact Submission</h2>
//           <p><strong>Name:</strong> ${escapeHtml(name)}</p>
//           <p><strong>Email:</strong> ${escapeHtml(email)}</p>
//           <p><strong>Message:</strong></p>
//           <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
//         </div>
//       `,
//     });

//     return NextResponse.json({ ok: true });
//   } catch (err: any) {
//     console.error('/api/contact error', err);

//     // Helpful hint if Gmail blocks sign-in
//     const hint =
//       'Check GMAIL_USER / GMAIL_APP_PASSWORD envs and ensure App Password is enabled (2FA required).';

//     return NextResponse.json({ error: err?.message || hint }, { status: 500 });
//   }
// }

// // Small helper to avoid HTML injection
// function escapeHtml(str: string) {
//   return str
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#039;');
// }
// /app/api/gmail/send/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';
export const runtime = 'nodejs';

function oAuth() {
  const o = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.GOOGLE_REDIRECT_URI!
  );
  o.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN! });
  return o;
}

function toBase64Url(str: string) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

export async function POST(req: Request) {
  try {
    const { to, subject, text } = await req.json();
    const user = process.env.GMAIL_API_USER!;
    const raw =
      `From: <${user}>\r\n` +
      `To: <${to}>\r\n` +
      `Subject: ${subject}\r\n` +
      `Content-Type: text/plain; charset="UTF-8"\r\n\r\n` +
      text;

    const gmail = google.gmail({ version: 'v1', auth: oAuth() });
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: toBase64Url(raw) },
    });

    return NextResponse.json({ ok: true, id: res.data.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'send failed' }, { status: 500 });
  }
}
