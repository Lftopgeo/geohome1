/*
  # Technical Inspection System

  1. New Tables
    - `inspection_templates` - Stores predefined inspection templates
    - `inspection_items` - Stores individual inspection items and their status
    - `inspection_photos` - Stores photos with metadata

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users

  3. Changes
    - Add support for templates and reusable items
    - Add metadata for photos and categorization
*/

-- Create inspection_templates table
CREATE TABLE IF NOT EXISTS inspection_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  items JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create inspection_items table
CREATE TABLE IF NOT EXISTS inspection_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id UUID REFERENCES technical_inspections(id) ON DELETE CASCADE,
  template_id UUID REFERENCES inspection_templates(id),
  name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL,
  observations TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Add metadata columns to inspection_photos
ALTER TABLE inspection_photos 
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS category TEXT,
ADD COLUMN IF NOT EXISTS item_id UUID REFERENCES inspection_items(id) ON DELETE SET NULL;

-- Enable RLS
ALTER TABLE inspection_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspection_items ENABLE ROW LEVEL SECURITY;

-- Policies for inspection_templates
CREATE POLICY "Users can view all templates"
  ON inspection_templates
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create templates"
  ON inspection_templates
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

-- Policies for inspection_items
CREATE POLICY "Users can view items from their inspections"
  ON inspection_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM technical_inspections
      WHERE id = inspection_items.inspection_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create items for their inspections"
  ON inspection_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM technical_inspections
      WHERE id = inspection_items.inspection_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update items from their inspections"
  ON inspection_items
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM technical_inspections
      WHERE id = inspection_items.inspection_id
      AND user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM technical_inspections
      WHERE id = inspection_items.inspection_id
      AND user_id = auth.uid()
    )
  );

-- Create indexes
CREATE INDEX IF NOT EXISTS inspection_items_inspection_id_idx ON inspection_items(inspection_id);
CREATE INDEX IF NOT EXISTS inspection_items_template_id_idx ON inspection_items(template_id);
CREATE INDEX IF NOT EXISTS inspection_photos_item_id_idx ON inspection_photos(item_id);
CREATE INDEX IF NOT EXISTS inspection_photos_category_idx ON inspection_photos(category);

-- Insert default templates
INSERT INTO inspection_templates (name, category, description, items) VALUES
('Bathroom Inspection', 'internal', 'Standard bathroom inspection template', '[
  {"name": "Shower", "description": "Check water pressure and leaks"},
  {"name": "Toilet", "description": "Check flush and connections"},
  {"name": "Sink", "description": "Check drain and faucet"}
]'),
('Kitchen Inspection', 'internal', 'Standard kitchen inspection template', '[
  {"name": "Sink", "description": "Check drain and faucet"},
  {"name": "Countertops", "description": "Check condition and sealing"},
  {"name": "Cabinets", "description": "Check doors and hardware"}
]'),
('Electrical System', 'infrastructure', 'Electrical system inspection', '[
  {"name": "Circuit Breakers", "description": "Check condition and labeling"},
  {"name": "Outlets", "description": "Test all outlets"},
  {"name": "Lighting", "description": "Check all light fixtures"}
]'),
('Structural Elements', 'structure', 'Building structure inspection', '[
  {"name": "Walls", "description": "Check for cracks and moisture"},
  {"name": "Ceiling", "description": "Check for leaks and damage"},
  {"name": "Floor", "description": "Check for levelness and damage"}
]');