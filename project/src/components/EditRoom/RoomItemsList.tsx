import React from 'react';
import { Plus } from 'lucide-react';
import { RoomItemCard } from './RoomItemCard';
import type { RoomItem } from '../../types';

interface RoomItemsListProps {
  items: RoomItem[];
  onUpdateItem: (id: string, updates: Partial<RoomItem>) => void;
  onAddItem: () => void;
}

export function RoomItemsList({ items, onUpdateItem, onAddItem }: RoomItemsListProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Itens do Cômodo</h3>
        <button
          type="button"
          onClick={onAddItem}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-500"
        >
          <Plus size={20} />
          <span>Adicionar Item</span>
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <RoomItemCard
            key={item.id}
            item={item}
            onUpdate={onUpdateItem}
          />
        ))}
      </div>
    </div>
  );
}