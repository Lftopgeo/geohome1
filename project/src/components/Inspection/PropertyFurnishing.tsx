import React from 'react';

export function PropertyFurnishing() {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Mobília</h3>
      <div className="flex gap-4">
        {['Mobiliado', 'Semi-mobiliado', 'Não mobiliado'].map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name="furnishing"
              value={option.toLowerCase()}
              className="text-[#DDA76A] focus:ring-[#DDA76A]"
              required
            />
            <span className="text-sm text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}