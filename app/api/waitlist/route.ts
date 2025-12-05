import WaitlistConfirmation from "@/components/emails/waitlist-confirmation";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email?.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Check if already on waitlist
    try {
      const { data: existing } = await resend.contacts.get({
        email,
        audienceId: AUDIENCE_ID,
      });
      if (existing) {
        return NextResponse.json({ success: true, exists: true });
      }
    } catch {}

    // Create new contact
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    // Fetch updated waitlist count
    const countRes = await fetch(`https://casevia.io/api/waitlist/count`);
    const json = await countRes.json();
    const queuePosition = json.count ?? 0;

    // Send confirmation email with queue number
    await resend.emails.send({
      from: "Casevia <hello@muizrexhepi.com>",
      to: email,
      subject: "🎉 You're officially in line for Casevia!",
      react: WaitlistConfirmation({
        userEmail: email,
        queuePosition,
      }),
    });

    return NextResponse.json({ success: true, exists: false, queuePosition });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
