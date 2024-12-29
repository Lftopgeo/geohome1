import React from 'react';
import { ClipboardList, LayoutGrid, Home, Building2, Key, FileText } from 'lucide-react';

const steps = [
  { icon: ClipboardList, label: 'Nova Vistoria', active: true },
  { icon: LayoutGrid, label: 'Escolha do Ambiente' },
  { icon: Home, label: 'Ambiente Interno' },
  { icon: Building2, label: 'Ambiente Externo' },
  { icon: Key, label: 'Chaves e Medidores' },
  { icon: FileText, label: 'Relatório' }
];

export function InspectionSteps() {
  return (
    <div className="w-full py-6">
      <div className="flex justify-between">
        {steps.map((Step, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className={`p-4 rounded-full ${index === 0 ? 'bg-[#DDA76A]' : 'bg-gray-200'}`}>
              <Step.icon size={24} className={index === 0 ? 'text-white' : 'text-gray-500'} />
            </div>
            <span className={`text-sm ${index === 0 ? 'text-[#DDA76A] font-medium' : 'text-gray-500'}`}>
              {Step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}