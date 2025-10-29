-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  phone text,
  company text,
  company_size text,
  industry text,
  position text,
  hear_about text,
  goal text,
  timeline text,
  criticality integer,
  use_case text,
  feedback_opt_in boolean DEFAULT false,
  source text,
  ua text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Create index on industry for filtering
CREATE INDEX IF NOT EXISTS idx_leads_industry ON leads(industry);

-- Create index on timeline for filtering
CREATE INDEX IF NOT EXISTS idx_leads_timeline ON leads(timeline);
