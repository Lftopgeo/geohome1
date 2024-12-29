import React from 'react';

interface StepConnectorProps {
  isCompleted: boolean;
}

export function StepConnector({ isCompleted }: StepConnectorProps) {
  return (
    <div className="flex-1 mx-2">
      <div className={`h-0.5 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`} />
    </div>
  );
}