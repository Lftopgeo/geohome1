import React from 'react';
import type { PropertyType, PropertySubtype } from '../../../types/property';

interface PropertySubtypeSelectorProps {
  propertyType: PropertyType;
  value: string;
  onChange: (value: string) => void;
}

const subtypeOptions: Record<PropertyType, PropertySubtype[]> = {
  apartment: ['studio', 'kitnet', 'coverage', 'duplex', 'standard', 'other'],
  house: ['ground', 'twostory', 'condo', 'village', 'other'],
  land: ['residential', 'commercial', 'industrial', 'rural', 'other'],
  commercial: ['office', 'store', 'warehouse', 'building', 'other']
};

const subtypeLabels: Record<PropertySubtype, string> = {
  studio: 'Studio',
  kitnet: 'Kitnet',
  coverage: 'Cobertura',
  duplex: 'Duplex',
  standard: 'Padrão',
  ground: 'Térrea',
  twostory: 'Sobrado',
  condo: 'Condomínio',
  village: 'Vila',
  residential: 'Residencial',
  commercial: 'Comercial',
  industrial: 'Industrial',
  rural: 'Rural',
  office: 'Sala Comercial',
  store: 'Loja',
  warehouse: 'Galpão',
  building: 'Prédio',
  other: 'Outro'
};

export function PropertySubtypeSelector({ propertyType, value, onChange }: PropertySubtypeSelectorProps) {
  const options = subtypeOptions[propertyType];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Subtipo
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg"
        required
      >
        <option value="">Selecione o subtipo</option>
        {options.map((subtype) => (
          <option key={subtype} value={subtype}>
            {subtypeLabels[subtype]}
          </option>
        ))}
      </select>
    </div>
  );
}