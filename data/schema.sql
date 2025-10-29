-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text NOT NULL,
  position text NOT NULL,
  use_case text NOT NULL,
  source text,
  ua text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Create index on position for filtering
CREATE INDEX IF NOT EXISTS idx_leads_position ON leads(position);
