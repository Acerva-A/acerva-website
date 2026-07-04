@AGENTS.md

## Contact Form Setup (Supabase)

The contact form saves submissions to Supabase. To enable:

1. Create Supabase project at https://supabase.com
2. Create `contact_form_submissions` table with columns:
   - `id` (UUID, primary key, auto-generated)
   - `first_name` (text)
   - `last_name` (text)
   - `email` (text)
   - `phone` (text, nullable)
   - `country_code` (text, default: 'AU')
   - `company` (text, nullable)
   - `message` (text)
   - `created_at` (timestamptz, default: now())
3. Get credentials from Project Settings > API:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL` in `.env.local`
   - Service Role Key → `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`
