import React, { useState } from 'react';
import { X } from 'lucide-react';
import { RoomDetails } from './RoomDetails';
import { RoomItemsList } from './RoomItemsList';
import type { Room, RoomItem } from '../../../types';

interface EditRoomDialogProps {
  room: Room;
  onClose: () => void;
  onSave: (room: Room) => void;
}

export function EditRoomDialog({ room: initialRoom, onClose, onSave }: EditRoomDialogProps) {
  const [room, setRoom] = useState(initialRoom);

  const handleUpdateRoom = (updates: Partial<Room>) => {
    setRoom(prev => ({ ...prev, ...updates }));
  };

  const handleUpdateItem = (itemId: string, updates: Partial<RoomItem>) => {
    setRoom(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, ...updates } : item
      )
    }));
  };

  const handleAddItem = (newItem: Omit<RoomItem, 'id'>) => {
    const item: RoomItem = {
      ...newItem,
      id: crypto.randomUUID()
    };
    
    setRoom(prev => ({
      ...prev,
      items: [...prev.items, item]
    }));
  };

  const handleSave = () => {
    onSave(room);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-semibold">Editar {room.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <RoomDetails room={room} onUpdate={handleUpdateRoom} />
          <RoomItemsList
            items={room.items}
            onUpdateItem={handleUpdateItem}
            onAddItem={handleAddItem}
          />
          
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355]"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}