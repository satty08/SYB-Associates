
-- Leads
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  company text NOT NULL CHECK (char_length(company) BETWEEN 2 AND 120),
  role text CHECK (role IS NULL OR char_length(role) <= 120),
  industry text NOT NULL CHECK (industry IN ('pharma','manufacturing','consumer-health','other')),
  interest text NOT NULL CHECK (interest IN ('supply-chain','digital','analytics','operations','not-sure')),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 1500),
  source_path text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
-- No SELECT/UPDATE/DELETE policies: table is write-only from the app.

-- Newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE CHECK (char_length(email) BETWEEN 3 AND 255),
  source_path text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe"
  ON public.newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Page views (lightweight analytics)
CREATE TABLE public.page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path text NOT NULL CHECK (char_length(path) BETWEEN 1 AND 512),
  referrer text CHECK (referrer IS NULL OR char_length(referrer) <= 1024),
  user_agent text CHECK (user_agent IS NULL OR char_length(user_agent) <= 512),
  session_id text CHECK (session_id IS NULL OR char_length(session_id) <= 64),
  event_type text NOT NULL DEFAULT 'pageview' CHECK (event_type IN ('pageview','lead_submitted','newsletter_signup','cta_click')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX page_views_created_at_idx ON public.page_views (created_at DESC);
CREATE INDEX page_views_path_idx ON public.page_views (path);
GRANT INSERT ON public.page_views TO anon, authenticated;
GRANT ALL ON public.page_views TO service_role;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can record a page view"
  ON public.page_views FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
