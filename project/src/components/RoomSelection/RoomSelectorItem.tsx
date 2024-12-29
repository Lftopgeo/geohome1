import React from 'react';
import { Counter } from './Counter';

interface RoomSelectorItemProps {
  title: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function RoomSelectorItem({
  title,
  description,
  value,
  onChange,
  min,
  max
}: RoomSelectorItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-medium text-gray-700">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Counter
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
}