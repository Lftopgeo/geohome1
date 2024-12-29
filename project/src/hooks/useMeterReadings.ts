import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase/client';
import type { MeterReading } from '../components/Inspection/Checklist/types';

export function useMeterReadings(inspectionId: string) {
  const [readings, setReadings] = useState<MeterReading[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadReadings();
  }, [inspectionId]);

  const loadReadings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('meter_readings')
        .select('*')
        .eq('inspection_id', inspectionId)
        .order('date', { ascending: false });

      if (error) throw error;
      setReadings(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const addReading = async (reading: Omit<MeterReading, 'id'>) => {
    try {
      const { error } = await supabase
        .from('meter_readings')
        .insert([{
          ...reading,
          inspection_id: inspectionId
        }]);

      if (error) throw error;
      await loadReadings();
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  const updateReading = async (readingId: string, updates: Partial<MeterReading>) => {
    try {
      const { error } = await supabase
        .from('meter_readings')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', readingId);

      if (error) throw error;
      await loadReadings();
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  return {
    readings,
    loading,
    error,
    addReading,
    updateReading,
    refresh: loadReadings
  };
}