import React from 'react';
import { PhotoUpload } from '../Room/EditRoom/PhotoUpload';
import type { GardenInspection } from '../../types/externalInspection';

interface GardenSectionProps {
  data: GardenInspection;
  onUpdate: (updates: Partial<GardenInspection>) => void;
}

export function GardenSection({ data, onUpdate }: GardenSectionProps) {
  const handlePhotoUpload = (files: FileList) => {
    const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
    onUpdate({ photos: [...data.photos, ...newPhotos] });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Jardim</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Paisagismo
            </label>
            <select
              value={data.landscaping}
              onChange={(e) => onUpdate({ landscaping: e.target.value as InspectionStatus })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="good">Bom</option>
              <option value="regular">Regular</option>
              <option value="bad">Ruim</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sistema de Irrigação
            </label>
            <select
              value={data.irrigation.condition}
              onChange={(e) => onUpdate({ 
                irrigation: { 
                  ...data.irrigation, 
                  condition: e.target.value as InspectionStatus 
                } 
              })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="good">Bom</option>
              <option value="regular">Regular</option>
              <option value="bad">Ruim</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Área de Lazer
            </label>
            <select
              value={data.recreationArea}
              onChange={(e) => onUpdate({ recreationArea: e.target.value as InspectionStatus })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="good">Bom</option>
              <option value="regular">Regular</option>
              <option value="bad">Ruim</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobiliário
            </label>
            <select
              value={data.furniture}
              onChange={(e) => onUpdate({ furniture: e.target.value as InspectionStatus })}
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
            Observações
          </label>
          <textarea
            value={data.observations}
            onChange={(e) => onUpdate({ observations: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fotos
          </label>
          <PhotoUpload onUpload={handlePhotoUpload} />
          
          {data.photos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {data.photos.map((photo, index) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => {
                      const newPhotos = [...data.photos];
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
  );
}