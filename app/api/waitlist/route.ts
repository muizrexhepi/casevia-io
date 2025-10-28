import WaitlistConfirmation from "@/components/emails/waitlist-confirmation";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    try {
      const { data: existingContact } = await resend.contacts.get({
        email,
        audienceId: AUDIENCE_ID,
      });

      if (existingContact) {
        console.log(`Contact ${email} already on waitlist. Returning success.`);
        return NextResponse.json({ success: true, exists: true });
      }
    } catch (error: any) {
      // 404 error means contact does not exist, proceed.
    }

    const { data: createData, error: createError } =
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });

    if (createError) {
      console.error("Resend create contact error:", createError);
      return NextResponse.json(
        { error: "Failed to add to waitlist" },
        { status: 500 }
      );
    }

    try {
      const { data: sendData, error: sendError } = await resend.emails.send({
        from: "Casevia <hello@muizrexhepi.com>",
        to: email,
        subject: "🎉 You're on the Casevia Waitlist!",
        react: WaitlistConfirmation({ userEmail: email }),
      });

      if (sendError) {
        console.error("Failed to send confirmation email:", sendError);
      } else {
        console.log("Confirmation email sent successfully:", sendData);
      }
    } catch (emailErr) {
      console.error("Error in sending email block:", emailErr);
    }

    return NextResponse.json({ success: true, exists: false });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
