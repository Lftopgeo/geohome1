import React from 'react';

export function PropertyAreaInputs() {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Área do Imóvel</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Área total (m²)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Área construída (m²)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
      </div>
    </div>
  );
}