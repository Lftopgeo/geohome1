-- Create technical_inspections table
CREATE TABLE technical_inspections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  property_data JSONB NOT NULL,
  structural_conditions JSONB NOT NULL,
  installations JSONB NOT NULL,
  inspector_data JSONB NOT NULL
);

-- Create inspection_photos table
CREATE TABLE inspection_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id UUID REFERENCES technical_inspections(id),
  url TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE technical_inspections ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspection_photos ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own inspections"
  ON technical_inspections
  FOR SELECT
  TO authenticated
  USING (auth.uid() = inspector_data->>'user_id');

CREATE POLICY "Users can insert their own inspections"
  ON technical_inspections
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = inspector_data->>'user_id');

CREATE POLICY "Users can view photos from their inspections"
  ON inspection_photos
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM technical_inspections
      WHERE id = inspection_photos.inspection_id
      AND inspector_data->>'user_id' = auth.uid()
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
      AND inspector_data->>'user_id' = auth.uid()
    )
  );