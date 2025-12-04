import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

let cachedCount: number | null = null;
let lastFetchTime = 0;
const CACHE_MS = 1000 * 60 * 30; // 30 mins

async function fetchCount() {
  const response = await resend.contacts.list({
    audienceId: process.env.RESEND_AUDIENCE_ID!,
    limit: 100,
  });
  console.log({ response: response.data });
  // Type guard
  if (!("data" in response) || !Array.isArray(response.data?.data)) {
    throw new Error("Invalid Resend response");
  }

  const contacts = response.data.data;
  return contacts.filter((c) => !c.unsubscribed).length;
}

export async function GET() {
  try {
    const now = Date.now();

    if (!cachedCount || now - lastFetchTime > CACHE_MS) {
      cachedCount = await fetchCount();
      lastFetchTime = now;
    }

    return NextResponse.json({ count: cachedCount });
  } catch (e) {
    console.error("Error getting waitlist count:", e);
    return NextResponse.json(
      { count: cachedCount ?? 0 },
      { status: cachedCount ? 200 : 500 }
    );
  }
}
