import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL!);

export const runtime = "edge"; // fast & cheap

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
