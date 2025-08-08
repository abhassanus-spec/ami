/*
  # Add newsletter and voucher system

  1. New Tables
    - `vouchers`
      - `id` (uuid, primary key)
      - `code` (text, unique)
      - `discount_amount` (integer)
      - `is_used` (boolean)
      - `expires_at` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on new tables
    - Add policies for access control
*/

-- Vouchers table
CREATE TABLE IF NOT EXISTS vouchers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  discount_amount integer NOT NULL,
  is_used boolean DEFAULT false,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE vouchers ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can read vouchers"
  ON vouchers
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Service role can update vouchers"
  ON vouchers
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);