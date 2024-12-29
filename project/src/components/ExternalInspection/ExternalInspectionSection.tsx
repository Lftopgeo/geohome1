import React from 'react';
import { ExternalInspectionItem } from './ExternalInspectionItem';
import type { InspectionItem } from '../../types/inspection';

interface ExternalInspectionSectionProps {
  title: string;
  items: InspectionItem[];
  onUpdateItem: (id: string, updates: Partial<InspectionItem>) => void;
}

export function ExternalInspectionSection({
  title,
  items,
  onUpdateItem
}: ExternalInspectionSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <ExternalInspectionItem
            key={item.id}
            item={item}
            onUpdate={(updates) => onUpdateItem(item.id, updates)}
          />
        ))}
      </div>
    </div>
  );
}