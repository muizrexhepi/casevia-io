import ContactConfirmation from "@/components/emails/contact-confirmation";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
// 1. Import the render function
import { render } from "@react-email/render";

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

    // 2. Pre-render the React email component to an HTML string
    // This isolates potential rendering errors before the network request
    const confirmationHtml = await render(
      ContactConfirmation({
        firstName,
        userEmail: email,
      })
    );

    // Send both emails in parallel
    const [teamEmailResult, confirmationEmailResult] = await Promise.allSettled(
      [
        // Team notification email
        resend.emails.send({
          from: "Casevia Contact Form <hello@muizrexhepi.com>",
          to: "007lazi@gmail.com",
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        }),

        // User confirmation email
        resend.emails.send({
          from: "Casevia <hello@muizrexhepi.com>",
          to: email,
          subject: "Thank you for contacting Casevia!",
          // 3. Pass the pre-rendered string to 'html' instead of using 'react'
          html: confirmationHtml,
        }),
      ]
    );

    // Log results
    if (teamEmailResult.status === "rejected") {
      console.error("Team notification failed:", teamEmailResult.reason);
    } else if (teamEmailResult.value.error) {
      console.error("Team notification error:", teamEmailResult.value.error);
    } else {
      console.log("Team notification sent:", teamEmailResult.value.data);
    }

    if (confirmationEmailResult.status === "rejected") {
      console.error(
        "Confirmation email failed:",
        confirmationEmailResult.reason
      );
    } else if (confirmationEmailResult.value.error) {
      console.error(
        "Confirmation email error:",
        confirmationEmailResult.value.error
      );
    } else {
      console.log(
        "Confirmation email sent:",
        confirmationEmailResult.value.data
      );
    }

    return NextResponse.json({
      success: true,
      teamEmailSent:
        teamEmailResult.status === "fulfilled" && !teamEmailResult.value.error,
      confirmationEmailSent:
        confirmationEmailResult.status === "fulfilled" &&
        !confirmationEmailResult.value.error,
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
