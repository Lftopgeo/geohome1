import { useState, useEffect, useCallback } from 'react';
import type { RoomCounts } from './RoomSelector';

export function useRoomCounts(onChange?: (values: RoomCounts) => void) {
  const [counts, setCounts] = useState<RoomCounts>({
    bedrooms: 1,
    bathrooms: 1,
    suites: 0
  });

  useEffect(() => {
    // Ensure suites don't exceed bedrooms
    if (counts.suites > counts.bedrooms) {
      setCounts(prev => ({ ...prev, suites: counts.bedrooms }));
    }
    onChange?.(counts);
  }, [counts, onChange]);

  const handleChange = useCallback((key: keyof RoomCounts) => (value: number) => {
    setCounts(prev => ({ ...prev, [key]: value }));
  }, []);

  return { counts, handleChange };
}