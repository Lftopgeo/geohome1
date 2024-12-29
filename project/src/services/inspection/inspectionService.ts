import { supabase } from '../../lib/supabase/client';
import type { TechnicalInspection } from './types';

export class InspectionService {
  static async createInspection(inspection: TechnicalInspection) {
    try {
      // Insert main inspection data
      const { data: inspectionData, error: inspectionError } = await supabase
        .from('technical_inspections')
        .insert([{
          property_data: inspection.property,
          structural_conditions: inspection.structural_conditions,
          installations: inspection.installations,
          inspector_data: inspection.inspector,
        }])
        .select()
        .single();

      if (inspectionError) throw inspectionError;

      // Upload photos
      const photoPromises = inspection.photos.map(async (photo) => {
        const fileName = `${inspectionData.id}/${crypto.randomUUID()}.jpg`;
        
        const { error: uploadError } = await supabase.storage
          .from('inspection_photos')
          .upload(fileName, photo.url);

        if (uploadError) throw uploadError;

        return {
          inspection_id: inspectionData.id,
          url: fileName,
          description: photo.description,
          type: photo.type
        };
      });

      const photoResults = await Promise.all(photoPromises);

      // Insert photo references
      const { error: photosError } = await supabase
        .from('inspection_photos')
        .insert(photoResults);

      if (photosError) throw photosError;

      return inspectionData;
    } catch (error) {
      console.error('Error creating inspection:', error);
      throw error;
    }
  }
}