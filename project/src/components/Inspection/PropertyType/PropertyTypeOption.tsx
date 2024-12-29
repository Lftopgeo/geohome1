import React from 'react';
import { Building2, Home, Trees, Store } from 'lucide-react';
import type { PropertyType } from '../../../types/property';

interface PropertyTypeOptionProps {
  type: PropertyType;
  isSelected: boolean;
  onSelect: () => void;
}

const typeConfig = {
  apartment: {
    icon: Building2,
    label: 'Apartamento'
  },
  house: {
    icon: Home,
    label: 'Casa'
  },
  land: {
    icon: Trees,
    label: 'Terreno'
  },
  commercial: {
    icon: Store,
    label: 'Comercial'
  }
};

export function PropertyTypeOption({ type, isSelected, onSelect }: PropertyTypeOptionProps) {
  const { icon: Icon, label } = typeConfig[type];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`p-4 rounded-lg border-2 transition-all ${
        isSelected 
          ? 'border-[#DDA76A] bg-[#DDA76A]/10' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <Icon size={24} className={isSelected ? 'text-[#DDA76A]' : 'text-gray-600'} />
        <span className={`text-sm font-medium ${isSelected ? 'text-[#DDA76A]' : 'text-gray-700'}`}>
          {label}
        </span>
      </div>
    </button>
  );
}