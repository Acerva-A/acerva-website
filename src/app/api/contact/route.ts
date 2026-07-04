import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, company, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await supabase.from("contact_form_submissions").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        company: company || null,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return Response.json({ error: "Failed to save message" }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
