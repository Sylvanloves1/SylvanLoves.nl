import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { SITE_CONFIG } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Initialize Resend with API key (check at runtime)
    const apiKey = process.env.RESEND_API_KEY;

    // Send email using Resend
    if (apiKey) {
      const resend = new Resend(apiKey);

      try {
        const result = await resend.emails.send({
          from: "Portfolio <noreply@sylvanloves.nl>",
          to: [process.env.CONTACT_EMAIL || SITE_CONFIG.email],
          subject: `Portfolio Contact from ${name}`,
          text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
          html: `
            <div style="font-family: monospace; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #6b7280; font-size: 12px;">
                Sent from sylvanloves.com portfolio contact form
              </p>
            </div>
          `,
          reply_to: email,
        });

      } catch (emailError: any) {
        throw emailError;
      }
    } else {
      console.log("⚠️ Resend not configured - email not sent");
      console.log("Contact form submission:", { name, email, message });
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
