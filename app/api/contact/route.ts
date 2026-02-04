import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

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

    // Get Formspree form ID
    const formspreeId = process.env.FORMSPREE_FORM_ID;

    if (!formspreeId) {
      console.error("⚠️ Formspree not configured - FORMSPREE_FORM_ID missing");
      return NextResponse.json(
        { error: "Contact form is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Send to Formspree
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Portfolio Contact from ${name}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        throw new Error("Formspree request failed");
      }

      return NextResponse.json(
        { success: true, message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("Formspree submission error:", emailError);
      throw emailError;
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
