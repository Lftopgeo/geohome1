import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export function Counter({ value, onChange, min = 1, max = 5, disabled }: CounterProps) {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleDecrement}
        disabled={value <= min || disabled}
        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Minus size={20} />
      </button>
      
      <span className="w-8 text-center font-medium text-lg">{value}</span>
      
      <button
        onClick={handleIncrement}
        disabled={value >= max || disabled}
        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus size={20} />
      </button>
    </div>
  );
}