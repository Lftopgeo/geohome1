/*
  # Create Checklist Tables

  1. New Tables
    - `checklist_items`
      - `id` (uuid, primary key)
      - `category` (text)
      - `title` (text)
      - `description` (text)
      - `status` (text)
      - `observations` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `inspection_id` (uuid)
      - `user_id` (uuid)
    
    - `meter_readings`
      - `id` (uuid, primary key)
      - `current` (numeric)
      - `previous` (numeric)
      - `date` (timestamptz)
      - `consumption` (numeric)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `inspection_id` (uuid)
      - `user_id` (uuid)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage their own data
*/

-- Create checklist_items table
CREATE TABLE IF NOT EXISTS checklist_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  status text NOT NULL,
  observations text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  inspection_id uuid NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id)
);

-- Create meter_readings table
CREATE TABLE IF NOT EXISTS meter_readings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  current numeric NOT NULL,
  previous numeric NOT NULL,
  date timestamptz NOT NULL,
  consumption numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  inspection_id uuid NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE checklist_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE meter_readings ENABLE ROW LEVEL SECURITY;

-- Create policies for checklist_items
CREATE POLICY "Users can view their own checklist items"
  ON checklist_items
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own checklist items"
  ON checklist_items
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own checklist items"
  ON checklist_items
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create policies for meter_readings
CREATE POLICY "Users can view their own meter readings"
  ON meter_readings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own meter readings"
  ON meter_readings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own meter readings"
  ON meter_readings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);