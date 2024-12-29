import React, { useState, useEffect } from 'react';
import { RoomSelectorItem } from './RoomSelectorItem';
import { useRoomCounts } from './useRoomCounts';

interface RoomSelectorProps {
  onChange?: (values: RoomCounts) => void;
}

export interface RoomCounts {
  bedrooms: number;
  bathrooms: number;
  suites: number;
}

export function RoomSelector({ onChange }: RoomSelectorProps) {
  const { counts, handleChange } = useRoomCounts(onChange);

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Selecione os Cômodos</h3>
      
      <div className="space-y-4">
        <RoomSelectorItem
          title="Quartos"
          description="Total de quartos"
          value={counts.bedrooms}
          onChange={handleChange('bedrooms')}
          min={1}
          max={5}
        />

        <RoomSelectorItem
          title="Banheiros"
          description="Total de banheiros"
          value={counts.bathrooms}
          onChange={handleChange('bathrooms')}
          min={1}
          max={5}
        />

        <RoomSelectorItem
          title="Quartos com Suíte"
          description="Quartos com banheiro"
          value={counts.suites}
          onChange={handleChange('suites')}
          min={0}
          max={counts.bedrooms}
        />
      </div>
    </div>
  );
}