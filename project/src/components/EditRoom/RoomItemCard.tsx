import React, { useState } from 'react';
import { MoreVertical, ChevronDown, ChevronUp } from 'lucide-react';
import type { RoomItem } from '../../types';

interface RoomItemCardProps {
  item: RoomItem;
  onUpdate: (id: string, updates: Partial<RoomItem>) => void;
}

export function RoomItemCard({ item, onUpdate }: RoomItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    good: 'bg-green-100 text-green-800',
    regular: 'bg-yellow-100 text-yellow-800',
    bad: 'bg-red-100 text-red-800'
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{item.name}</h4>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-sm ${statusColors[item.status]}`}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 border-t bg-gray-50">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <select
                value={item.status}
                onChange={(e) => onUpdate(item.id, { status: e.target.value as RoomItem['status'] })}
                className="w-full px-3 py-2 border rounded-lg bg-white"
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
                value={item.observations || ''}
                onChange={(e) => onUpdate(item.id, { observations: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg resize-none"
                rows={3}
                placeholder="Adicione observações sobre o estado do item..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}