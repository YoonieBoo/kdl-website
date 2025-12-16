import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, workshop, message } = await req.json();

    // 1️⃣ Validate required fields
    if (!name || !email || !workshop || !message) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // 2️⃣ Check API key
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 3️⃣ Send email with workshop info
    const { error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: ["knowledgediscoverylab@gmail.com"],
      replyTo: email,
      subject: `New Contact – ${workshop}`,
      text: `
New website contact submission

Name:
${name}

Email:
${email}

Workshop Interested In:
${workshop}

Message:
${message}
      `.trim(),
    });

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (e) {
    return Response.json(
      { error: "Invalid request or server error" },
      { status: 500 }
    );
  }
}
