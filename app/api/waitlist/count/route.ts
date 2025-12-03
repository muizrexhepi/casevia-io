import { supabaseAdmin } from "@/lib/supabase/server";

export async function GET() {
  const { count, error } = await supabaseAdmin
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ count }), { status: 200 });
}
