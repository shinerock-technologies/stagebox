import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";

const sql = neon(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY);

// Removed edge runtime - Resend needs Node.js runtime
// export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    // Basic content-type guard
    const isJSON = req.headers
      .get("content-type")
      ?.includes("application/json");
    let body: any = {};

    if (isJSON) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = Object.fromEntries(form.entries());
    }

    const { email, name, position, useCase, source, _hp } = body;

    // Honeypot (bots often fill hidden fields)
    if (_hp) {
      return NextResponse.json({ ok: true }); // silently ignore
    }

    // Validate required fields
    if (!email || !/^\S+@\S+\.\S+$/.test(String(email))) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!name || !position || !useCase) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert into Neon
    await sql`
      INSERT INTO leads (
        email, name, position, use_case, source, ua
      )
      VALUES (
        ${email},
        ${name},
        ${position},
        ${useCase},
        ${source || req.headers.get("referer") || null},
        ${req.headers.get("user-agent") || null}
      )
    `;

    // Send email notification
    try {
      // In dev, Resend only allows sending to your own email (abyiber.dev@gmail.com)
      // In production, send to ALERT_TO
      const isDev = process.env.NODE_ENV === "development";
      const toEmail = isDev
        ? "abyiber.dev@gmail.com"
        : process.env.ALERT_TO || "shinerock.technologies@gmail.com";

      console.log("🔄 Attempting to send email...");
      console.log("Environment:", process.env.NODE_ENV);
      console.log("To:", toEmail);

      const result = await resend.emails.send({
        from: process.env.ALERT_FROM || "onboarding@resend.dev",
        to: toEmail,
        subject: `New Lead: ${name}`,
        html: `
          <h2>New Lead Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Use Case:</strong></p>
          <p>${useCase}</p>
          <p><strong>Source:</strong> ${source || "Direct"}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">Submitted at ${new Date().toLocaleString()}</p>
        `,
      });

      console.log("✅ Email sent successfully:", result);
    } catch (emailError) {
      console.error("❌ Failed to send email:", emailError);
      // Don't fail the request if email fails
    }

    // If it was a browser form post, support redirect
    const wantsHTML = req.headers.get("accept")?.includes("text/html");
    const redirectTo = (body._redirect as string) || "/thanks";

    if (wantsHTML && !isJSON) {
      return NextResponse.redirect(new URL(redirectTo, req.url), 303);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
