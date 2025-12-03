import ContactConfirmation from "@/components/emails/contact-confirmation";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, message } =
      await request.json();

    // Validation
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!firstName || !lastName || !company || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send notification email to your team
    try {
      const { error: teamEmailError } = await resend.emails.send({
        from: "Casevia Contact Form <hello@muizrexhepi.com>",
        to: "contact@casevia.io", // Your team email
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      if (teamEmailError) {
        console.error("Failed to send team notification:", teamEmailError);
      }
    } catch (emailErr) {
      console.error("Error sending team notification:", emailErr);
    }

    // Send confirmation email to user
    try {
      const { data: sendData, error: sendError } = await resend.emails.send({
        from: "Casevia <hello@muizrexhepi.com>",
        to: email,
        subject: "Thank you for contacting Casevia!",
        react: ContactConfirmation({
          firstName,
          userEmail: email,
        }),
      });

      if (sendError) {
        console.error("Failed to send confirmation email:", sendError);
      } else {
        console.log("Confirmation email sent successfully:", sendData);
      }
    } catch (emailErr) {
      console.error("Error in sending confirmation email:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
