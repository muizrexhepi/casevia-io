import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase/client";
import WaitlistConfirmation from "@/components/emails/waitlist-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY!);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: NextRequest) {
  try {
    const { email, fullName, company, role, useCase } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Check Supabase for duplication
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .single();

    let exists = !!existing;

    if (!exists) {
      // Insert into Supabase
      await supabase.from("waitlist").insert({
        email,
        full_name: fullName,
        company,
        role,
        use_case: useCase,
      });
    }

    // Add to Resend audience
    try {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });
    } catch {}

    // Send confirmation email only first time
    if (!exists) {
      await resend.emails.send({
        from: "Casevia <hello@muizrexhepi.com>",
        to: email,
        subject: "🎉 You're on the Casevia Waitlist!",
        react: WaitlistConfirmation({ userEmail: email }),
      });
    }

    return NextResponse.json({ success: true, exists });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
