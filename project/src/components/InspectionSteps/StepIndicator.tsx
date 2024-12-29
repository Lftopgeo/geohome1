import React from 'react';
import type { InspectionStep } from './types';

interface StepIndicatorProps {
  step: InspectionStep;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export function StepIndicator({ step, isActive, isCompleted, onClick }: StepIndicatorProps) {
  const getStatusClasses = () => {
    if (isActive) return 'bg-[#DDA76A] text-white';
    if (isCompleted) return 'bg-green-500 text-white';
    return 'bg-gray-200 text-gray-500';
  };

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group"
      title={step.description}
    >
      <div className={`p-4 rounded-full transition-colors ${getStatusClasses()}`}>
        <step.icon size={24} />
      </div>
      <span className={`text-sm ${isActive ? 'text-[#DDA76A] font-medium' : 'text-gray-500'}`}>
        {step.label}
      </span>
    </button>
  );
}