import React from 'react';
import { ChevronDown, ChevronUp, Camera } from 'lucide-react';
import { PhotoUpload } from './PhotoUpload';
import type { RoomItem } from '../../../types';

interface RoomItemCardProps {
  item: RoomItem;
  isExpanded: boolean;
  onToggle: () => void;
  onUpdate: (updates: Partial<RoomItem>) => void;
}

export function RoomItemCard({ item, isExpanded, onToggle, onUpdate }: RoomItemCardProps) {
  const statusColors = {
    good: 'bg-green-100 text-green-800',
    regular: 'bg-yellow-100 text-yellow-800',
    bad: 'bg-red-100 text-red-800'
  };

  const handlePhotoUpload = (files: FileList) => {
    const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
    onUpdate({ 
      photos: [...(item.photos || []), ...newPhotos] 
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
      >
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{item.name}</h4>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-sm ${statusColors[item.status]}`}>
                {item.status === 'good' ? 'Bom' : item.status === 'regular' ? 'Regular' : 'Ruim'}
              </span>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
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
                onChange={(e) => onUpdate({ status: e.target.value as RoomItem['status'] })}
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
                onChange={(e) => onUpdate({ observations: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg resize-none"
                rows={3}
                placeholder="Adicione observações sobre o estado do item..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fotos
              </label>
              <PhotoUpload onUpload={handlePhotoUpload} />
              
              {item.photos && item.photos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {item.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-square">
                      <img
                        src={photo}
                        alt={`${item.name} - Foto ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => {
                          const newPhotos = [...item.photos!];
                          newPhotos.splice(index, 1);
                          onUpdate({ photos: newPhotos });
                        }}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}