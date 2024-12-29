import React from 'react';
import type { Room } from '../../../types';

interface RoomDetailsProps {
  room: Room;
  onUpdate: (updates: Partial<Room>) => void;
}

export function RoomDetails({ room, onUpdate }: RoomDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome
        </label>
        <input
          type="text"
          value={room.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Estado
        </label>
        <select
          value={room.status}
          onChange={(e) => onUpdate({ status: e.target.value as Room['status'] })}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="good">Bom</option>
          <option value="regular">Regular</option>
          <option value="bad">Ruim</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Observações
        </label>
        <textarea
          value={room.observations}
          onChange={(e) => onUpdate({ observations: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 border rounded-lg resize-none"
        />
      </div>
    </div>
  );
}