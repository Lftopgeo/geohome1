import React from 'react';
import { Camera } from 'lucide-react';
import { PhotoUpload } from '../Room/EditRoom/PhotoUpload';
import type { GarageInspection } from '../../types/externalInspection';

interface GarageSectionProps {
  data: GarageInspection;
  onUpdate: (updates: Partial<GarageInspection>) => void;
}

export function GarageSection({ data, onUpdate }: GarageSectionProps) {
  const handlePhotoUpload = (files: FileList) => {
    const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
    onUpdate({ photos: [...data.photos, ...newPhotos] });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Garagem</h2>
      
      <div className="space-y-6">
        {/* Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacidade (veículos)
            </label>
            <input
              type="number"
              value={data.capacity}
              onChange={(e) => onUpdate({ capacity: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Largura (m)
            </label>
            <input
              type="number"
              value={data.dimensions.width}
              onChange={(e) => onUpdate({ 
                dimensions: { ...data.dimensions, width: Number(e.target.value) }
              })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comprimento (m)
            </label>
            <input
              type="number"
              value={data.dimensions.length}
              onChange={(e) => onUpdate({ 
                dimensions: { ...data.dimensions, length: Number(e.target.value) }
              })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado do Piso
            </label>
            <select
              value={data.floorCondition}
              onChange={(e) => onUpdate({ floorCondition: e.target.value as InspectionStatus })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="good">Bom</option>
              <option value="regular">Regular</option>
              <option value="bad">Ruim</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cobertura
            </label>
            <select
              value={data.roofing}
              onChange={(e) => onUpdate({ roofing: e.target.value as InspectionStatus })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="good">Bom</option>
              <option value="regular">Regular</option>
              <option value="bad">Ruim</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Iluminação
            </label>
            <select
              value={data.lighting}
              onChange={(e) => onUpdate({ lighting: e.target.value as InspectionStatus })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="good">Bom</option>
              <option value="regular">Regular</option>
              <option value="bad">Ruim</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ventilação
            </label>
            <select
              value={data.ventilation}
              onChange={(e) => onUpdate({ ventilation: e.target.value as InspectionStatus })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="good">Bom</option>
              <option value="regular">Regular</option>
              <option value="bad">Ruim</option>
            </select>
          </div>
        </div>

        {/* Observations */}
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

        {/* Photos */}
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