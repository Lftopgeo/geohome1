import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { RoomItemCard } from './RoomItemCard';
import { AddItemForm } from './AddItemForm';
import type { RoomItem } from '../../../types';

interface RoomItemsListProps {
  items: RoomItem[];
  onUpdateItem: (id: string, updates: Partial<RoomItem>) => void;
  onAddItem: (item: Omit<RoomItem, 'id'>) => void;
}

export function RoomItemsList({ items, onUpdateItem, onAddItem }: RoomItemsListProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const handleAddItem = (newItem: Omit<RoomItem, 'id'>) => {
    onAddItem(newItem);
    setShowAddForm(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Itens do Ambiente</h3>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 text-[#DDA76A] hover:text-[#c89355]"
        >
          <Plus size={20} />
          <span>Adicionar Item</span>
        </button>
      </div>

      {showAddForm && (
        <AddItemForm
          onSave={handleAddItem}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <RoomItemCard
            key={item.id}
            item={item}
            isExpanded={expandedItemId === item.id}
            onToggle={() => setExpandedItemId(expandedItemId === item.id ? null : item.id)}
            onUpdate={(updates) => onUpdateItem(item.id, updates)}
          />
        ))}
      </div>
    </div>
  );
}