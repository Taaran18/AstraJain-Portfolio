import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  name: string;
  email?: string;
  phone: string;
  service?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // ─── Integrate your email service here ───────────────────────────────────
    //
    // Example with Resend (https://resend.com):
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "AstroJain Contact <noreply@astrojain.in>",
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New Consultation Request – ${body.name}`,
    //   text: `
    //     Name: ${body.name}
    //     Phone: ${body.phone}
    //     Email: ${body.email || "—"}
    //     Service: ${body.service || "—"}
    //     Message: ${body.message || "—"}
    //   `,
    // });
    //
    // ─────────────────────────────────────────────────────────────────────────

    // For now, log and return success
    console.log("Contact form submission:", {
      name: body.name,
      phone: body.phone,
      email: body.email,
      service: body.service,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received. We will contact you shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
