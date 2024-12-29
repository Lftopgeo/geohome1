import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { RoomItemsList } from './RoomItemsList';
import { AddItemForm } from './AddItemForm';
import { PhotoUpload } from './PhotoUpload';
import type { Room, RoomItem } from '../../types';

interface EditRoomFormProps {
  room: Room;
  onClose: () => void;
  onSave: (room: Room) => void;
}

export function EditRoomForm({ room: initialRoom, onClose, onSave }: EditRoomFormProps) {
  const [room, setRoom] = useState(initialRoom);
  const [showAddItem, setShowAddItem] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(room);
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
    setShowAddItem(false);
  };

  const handlePhotoUpload = (files: FileList) => {
    // Convert FileList to array of URLs
    const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
    setRoom(prev => ({
      ...prev,
      photos: [...prev.photos, ...newPhotos]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-xl font-semibold">Editar {room.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Cômodo
                </label>
                <input
                  type="text"
                  value={room.name}
                  onChange={(e) => setRoom(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Nome do cômodo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <select
                  value={room.status}
                  onChange={(e) => setRoom(prev => ({ ...prev, status: e.target.value as Room['status'] }))}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="good">Bom</option>
                  <option value="regular">Regular</option>
                  <option value="bad">Ruim</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Observações Gerais
              </label>
              <textarea
                value={room.observations}
                onChange={(e) => setRoom(prev => ({ ...prev, observations: e.target.value }))}
                className="w-full px-3 py-2 border rounded-lg"
                rows={3}
                placeholder="Observações sobre o cômodo..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fotos
              </label>
              <div className="space-y-4">
                <PhotoUpload onUpload={handlePhotoUpload} />
                
                {room.photos.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {room.photos.map((photo, index) => (
                      <div key={index} className="relative aspect-square">
                        <img
                          src={photo}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => setRoom(prev => ({
                            ...prev,
                            photos: prev.photos.filter((_, i) => i !== index)
                          }))}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {showAddItem ? (
                <div className="border rounded-lg p-4">
                  <h4 className="text-lg font-medium mb-4">Adicionar Novo Item</h4>
                  <AddItemForm
                    onAdd={handleAddItem}
                    onCancel={() => setShowAddItem(false)}
                  />
                </div>
              ) : (
                <RoomItemsList 
                  items={room.items}
                  onUpdateItem={handleUpdateItem}
                  onAddItem={() => setShowAddItem(true)}
                />
              )}
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              >
                Salvar Alterações
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}