import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WaitlistConfirmation from "@/components/emails/waitlist-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY!);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    try {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });
    } catch (e) {
      console.warn("Resend contact creation/update failed:", e);
    }

    await resend.emails.send({
      from: "Casevia <hello@muizrexhepi.com>",
      to: email,
      subject: "🎉 You're on the Casevia Waitlist!",
      react: WaitlistConfirmation({ userEmail: email }),
    });

    return NextResponse.json({
      success: true,
      message: "Added to Resend waitlist.",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
