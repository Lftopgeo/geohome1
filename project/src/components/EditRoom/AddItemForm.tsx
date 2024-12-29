import React, { useState } from 'react';
import type { RoomItem } from '../../types';

interface AddItemFormProps {
  onAdd: (item: Omit<RoomItem, 'id'>) => void;
  onCancel: () => void;
}

export function AddItemForm({ onAdd, onCancel }: AddItemFormProps) {
  const [item, setItem] = useState({
    name: '',
    description: '',
    status: 'good' as const,
  });

  const handleSubmit = () => {
    if (item.name && item.description) {
      onAdd(item);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome do Item
        </label>
        <input
          type="text"
          value={item.name}
          onChange={(e) => setItem(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descrição
        </label>
        <textarea
          value={item.description}
          onChange={(e) => setItem(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-3 py-2 border rounded-lg"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Estado
        </label>
        <select
          value={item.status}
          onChange={(e) => setItem(prev => ({ ...prev, status: e.target.value as 'good' | 'regular' | 'bad' }))}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="good">Bom</option>
          <option value="regular">Regular</option>
          <option value="bad">Ruim</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          Adicionar Item
        </button>
      </div>
    </div>
  );
}