import React from 'react';
import { ChecklistItem } from './ChecklistItem';
import type { ChecklistItem as ChecklistItemType } from './types';

interface ChecklistSectionProps {
  title: string;
  items: ChecklistItemType[];
  onItemUpdate: (item: ChecklistItemType) => void;
}

export function ChecklistSection({ title, items, onItemUpdate }: ChecklistSectionProps) {
  const handleStatusChange = (id: string, status: ChecklistItemType['status']) => {
    const item = items.find(i => i.id === id);
    if (item) {
      onItemUpdate({ ...item, status });
    }
  };

  const handleObservationChange = (id: string, observations: string) => {
    const item = items.find(i => i.id === id);
    if (item) {
      onItemUpdate({ ...item, observations });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item}
            onStatusChange={handleStatusChange}
            onObservationChange={handleObservationChange}
          />
        ))}
      </div>
    </div>
  );
}