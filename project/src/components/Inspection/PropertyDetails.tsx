import React, { useState } from 'react';
import { PropertyTypeSelector } from './PropertyType/PropertyTypeSelector';
import { PropertySubtypeSelector } from './PropertyType/PropertySubtypeSelector';
import { PropertyAreaInputs } from './PropertyAreaInputs';
import { PropertyFurnishing } from './PropertyFurnishing';
import type { PropertyType } from '../../types/property';

export function PropertyDetails() {
  const [propertyType, setPropertyType] = useState<PropertyType | null>(null);
  const [subtype, setSubtype] = useState('');

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Dados do Imóvel</h2>
      
      {/* Property Type Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tipo de Imóvel
        </label>
        <PropertyTypeSelector
          selectedType={propertyType}
          onTypeSelect={setPropertyType}
        />
      </div>

      {/* Property Subtype */}
      {propertyType && (
        <div className="mb-6">
          <PropertySubtypeSelector
            propertyType={propertyType}
            value={subtype}
            onChange={setSubtype}
          />
        </div>
      )}

      {/* Property Area */}
      <PropertyAreaInputs />

      {/* Furnishing Status */}
      <PropertyFurnishing />

      {/* Address Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Endereço
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Número
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Complemento
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CEP
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
      </div>
    </div>
  );
}