import React from 'react';
import { useLocation } from 'react-router-dom';
import { ClipboardList, LayoutGrid, Home, Building2, Key, FileText } from 'lucide-react';

const steps = [
  { id: 'new-inspection', icon: ClipboardList, label: 'Nova Vistoria', path: '/nova-vistoria' },
  { id: 'choose-environment', icon: LayoutGrid, label: 'Escolha do Ambiente', path: '/areas-vistoria' },
  { id: 'internal-environment', icon: Home, label: 'Ambiente Interno', path: '/ambiente-interno' },
  { id: 'external-environment', icon: Building2, label: 'Ambiente Externo', path: '/ambiente-externo' },
  { id: 'keys-meters', icon: Key, label: 'Chaves e Medidores', path: '/chaves-medidores' },
  { id: 'report', icon: FileText, label: 'Relatório', path: '/relatorio' }
];

interface InspectionStepsProps {
  currentStep: string;
}

export function InspectionSteps({ currentStep }: InspectionStepsProps) {
  const location = useLocation();

  const getStepStatus = (stepId: string) => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    const stepIndex = steps.findIndex(step => step.id === stepId);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <div className="w-full py-6">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          return (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div 
                className={`p-4 rounded-full ${
                  status === 'active' ? 'bg-[#DDA76A]' : 
                  status === 'completed' ? 'bg-green-500' : 
                  'bg-gray-200'
                }`}
              >
                <step.icon 
                  size={24} 
                  className={status === 'pending' ? 'text-gray-500' : 'text-white'} 
                />
              </div>
              <span 
                className={`text-sm ${
                  status === 'active' ? 'text-[#DDA76A] font-medium' : 
                  status === 'completed' ? 'text-green-500' : 
                  'text-gray-500'
                }`}
              >
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div className="flex-1 w-full h-0.5 mt-2">
                  <div 
                    className={`h-full ${
                      status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`} 
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}