/*
  # Technical Inspections Schema

  1. New Tables
    - technical_inspections: Stores inspection reports
    - inspection_photos: Stores photo references and metadata
  
  2. Security
    - RLS enabled on both tables
    - Policies for authenticated users to manage their own data
*/

-- Create technical_inspections table
CREATE TABLE IF NOT EXISTS technical_inspections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  property_data JSONB NOT NULL,
  structural_conditions JSONB NOT NULL,
  installations JSONB NOT NULL,
  inspector_data JSONB NOT NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id)
);

-- Create inspection_photos table
CREATE TABLE IF NOT EXISTS inspection_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id UUID REFERENCES technical_inspections(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE technical_inspections ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspection_photos ENABLE ROW LEVEL SECURITY;

-- Create policies for technical_inspections
CREATE POLICY "Users can view their own inspections"
  ON technical_inspections
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own inspections"
  ON technical_inspections
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for inspection_photos
CREATE POLICY "Users can view photos from their inspections"
  ON inspection_photos
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM technical_inspections
      WHERE id = inspection_photos.inspection_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert photos to their inspections"
  ON inspection_photos
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM technical_inspections
      WHERE id = inspection_photos.inspection_id
      AND user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS technical_inspections_user_id_idx ON technical_inspections(user_id);
CREATE INDEX IF NOT EXISTS inspection_photos_inspection_id_idx ON inspection_photos(inspection_id);