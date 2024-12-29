import React from 'react';
import { PropertyTypeOption } from './PropertyTypeOption';
import type { PropertyType } from '../../../types/property';

interface PropertyTypeSelectorProps {
  selectedType: PropertyType | null;
  onTypeSelect: (type: PropertyType) => void;
}

export function PropertyTypeSelector({ selectedType, onTypeSelect }: PropertyTypeSelectorProps) {
  const propertyTypes: PropertyType[] = ['apartment', 'house', 'land', 'commercial'];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {propertyTypes.map((type) => (
        <PropertyTypeOption
          key={type}
          type={type}
          isSelected={selectedType === type}
          onSelect={() => onTypeSelect(type)}
        />
      ))}
    </div>
  );
}