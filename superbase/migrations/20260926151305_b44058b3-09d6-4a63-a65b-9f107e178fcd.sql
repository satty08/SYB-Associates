ALTER TABLE public.leads
  DROP CONSTRAINT leads_industry_check;

ALTER TABLE public.leads
  ADD CONSTRAINT leads_industry_check
  CHECK (industry IN ('industrials-mobility', 'healthcare-life-sciences', 'consumer-food', 'retail', 'technology', 'other'));

ALTER TABLE public.leads
  DROP CONSTRAINT leads_interest_check;

ALTER TABLE public.leads
  ADD CONSTRAINT leads_interest_check
  CHECK (interest IN ('profitability', 'gtm', 'revenue-management', 'general-business-challenge', 'supply-chain', 'not-sure'));