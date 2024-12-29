import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase/client';
import type { ChecklistItem } from '../components/Inspection/Checklist/types';

export function useChecklist(inspectionId: string) {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadItems();
  }, [inspectionId]);

  const loadItems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('checklist_items')
        .select('*')
        .eq('inspection_id', inspectionId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setItems(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (itemId: string, updates: Partial<ChecklistItem>) => {
    try {
      const { error } = await supabase
        .from('checklist_items')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', itemId);

      if (error) throw error;
      await loadItems();
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  const addItem = async (item: Omit<ChecklistItem, 'id'>) => {
    try {
      const { error } = await supabase
        .from('checklist_items')
        .insert([{
          ...item,
          inspection_id: inspectionId
        }]);

      if (error) throw error;
      await loadItems();
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  return {
    items,
    loading,
    error,
    updateItem,
    addItem,
    refresh: loadItems
  };
}