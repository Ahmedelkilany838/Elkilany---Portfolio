// ─────────────────────────────────────────────────────────────────────────────
// API Resource Route: POST /api/contact
// React Router v7 resource route — no default component export.
// Handles contact form submissions and sends email via Resend.
// ─────────────────────────────────────────────────────────────────────────────

import { Resend } from 'resend';
import type { ActionFunctionArgs } from 'react-router';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactPayload {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

interface ApiSuccess {
    success: true;
    message: string;
}

interface ApiError {
    success: false;
    error: string;
}

type ApiResponse = ApiSuccess | ApiError;

// ─── Allowed project types ────────────────────────────────────────────────────

const ALLOWED_PROJECT_TYPES = [
    'Branding',
    'Advertising',
    'Print Design',
    'Strategy',
    'Other',
] as const;

type ProjectType = typeof ALLOWED_PROJECT_TYPES[number];

function isValidProjectType(value: string): value is ProjectType {
    return (ALLOWED_PROJECT_TYPES as readonly string[]).includes(value);
}

// ─── Server-side validation ───────────────────────────────────────────────────

function validatePayload(body: unknown): ContactPayload | string {
    // Ensure the body is a plain object
    if (typeof body !== 'object' || body === null) {
        return 'Invalid request body.';
    }

    const { name, email, projectType, message } = body as Record<string, unknown>;

    // name: required, minimum 2 characters
    if (typeof name !== 'string' || name.trim().length < 2) {
        return 'Name must be at least 2 characters.';
    }

    // email: required, basic RFC-compliant format check
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'A valid email address is required.';
    }

    // projectType: must be one of the allowed values
    if (typeof projectType !== 'string' || !isValidProjectType(projectType)) {
        return `Project type must be one of: ${ALLOWED_PROJECT_TYPES.join(', ')}.`;
    }

    // message: required, minimum 10 characters
    if (typeof message !== 'string' || message.trim().length < 10) {
        return 'Message must be at least 10 characters.';
    }

    return {
        name: name.trim(),
        email: email.trim(),
        projectType,
        message: message.trim(),
    };
}

// ─── Email HTML builder ────────────────────────────────────────────────────────

function buildEmailHtml(payload: ContactPayload): string {
    const { name, email, projectType, message } = payload;

    // Safe-encode user-supplied content to prevent HTML injection
    const esc = (s: string) =>
        s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #0a0a0a; color: #f0ece6; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; padding: 40px; background: #111; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); }
        .label { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 4px; }
        .value { font-size: 16px; color: #f0ece6; margin-bottom: 24px; }
        .message-box { background: #0d0d0d; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 20px; white-space: pre-wrap; font-size: 15px; line-height: 1.7; color: rgba(240,236,230,0.8); }
        .divider { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 32px 0; }
        .footer { font-size: 12px; color: rgba(255,255,255,0.25); text-align: center; }
        .accent { color: #ff4d29; font-weight: 700; }
      </style>
    </head>
    <body>
      <div class="container">
        <p style="margin-top:0">New message from your <span class="accent">portfolio contact form</span>:</p>

        <div class="label">Name</div>
        <div class="value">${esc(name)}</div>

        <div class="label">Email</div>
        <div class="value"><a href="mailto:${esc(email)}" style="color:#ff4d29">${esc(email)}</a></div>

        <div class="label">Project Type</div>
        <div class="value">${esc(projectType)}</div>

        <div class="label">Message</div>
        <div class="message-box">${esc(message)}</div>

        <hr class="divider" />
        <p class="footer">Sent from elkilany-portfolio.vercel.app</p>
      </div>
    </body>
    </html>
  `;
}

// ─── Email sender ─────────────────────────────────────────────────────────────

async function sendEmail(payload: ContactPayload): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        throw new Error('RESEND_API_KEY environment variable is not set.');
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
        // Resend requires a verified domain sender.
        // Replace with a domain you own once verified in the Resend dashboard.
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'ahmed.elkilany11111@gmail.com',
        replyTo: payload.email,
        subject: `New Project Inquiry — ${payload.projectType} — from ${payload.name}`,
        html: buildEmailHtml(payload),
    });

    if (error) {
        // Log the provider error server-side only; never expose it to the client
        console.error('[api/contact] Resend error:', error);
        throw new Error('Email provider rejected the request.');
    }
}

// ─── Resource route action ────────────────────────────────────────────────────

export async function action({ request }: ActionFunctionArgs): Promise<Response> {
    // Only accept POST — return 405 for all other methods
    if (request.method !== 'POST') {
        const body: ApiError = { success: false, error: 'Method not allowed.' };
        return Response.json(body, { status: 405 });
    }

    // Parse the JSON body safely
    let rawBody: unknown;
    try {
        rawBody = await request.json();
    } catch {
        const body: ApiError = { success: false, error: 'Invalid JSON body.' };
        return Response.json(body, { status: 400 });
    }

    // Run server-side validation
    const validated = validatePayload(rawBody);

    if (typeof validated === 'string') {
        // validated is a human-readable error message string
        const body: ApiError = { success: false, error: validated };
        return Response.json(body, { status: 400 });
    }

    // Attempt to send the email
    try {
        await sendEmail(validated);
    } catch {
        // Return a generic error — no internal detail leaves the server
        const body: ApiError = {
            success: false,
            error: 'Failed to send message. Please try again.',
        };
        return Response.json(body, { status: 500 });
    }

    const body: ApiSuccess = { success: true, message: 'Message sent successfully.' };
    return Response.json(body, { status: 200 });
}
