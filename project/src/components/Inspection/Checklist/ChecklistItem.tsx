import React from 'react';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import type { ChecklistItem as ChecklistItemType } from './types';

interface ChecklistItemProps {
  item: ChecklistItemType;
  onStatusChange: (id: string, status: ChecklistItemType['status']) => void;
  onObservationChange: (id: string, observation: string) => void;
}

export function ChecklistItem({ item, onStatusChange, onObservationChange }: ChecklistItemProps) {
  const statusIcons = {
    pending: <Clock className="text-gray-500" size={20} />,
    completed: <CheckCircle className="text-green-500" size={20} />,
    failed: <AlertTriangle className="text-red-500" size={20} />
  };

  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
        <div className="flex items-center gap-2">
          {statusIcons[item.status]}
          <select
            value={item.status}
            onChange={(e) => onStatusChange(item.id, e.target.value as ChecklistItemType['status'])}
            className="border rounded-lg px-2 py-1 text-sm"
          >
            <option value="pending">Pendente</option>
            <option value="completed">Concluído</option>
            <option value="failed">Falhou</option>
          </select>
        </div>
      </div>

      {item.safetyRequirements && (
        <div className="bg-yellow-50 p-3 rounded-lg">
          <h4 className="text-sm font-medium text-yellow-800 mb-2">Equipamentos de Segurança</h4>
          <ul className="space-y-1">
            {item.safetyRequirements.map((req, index) => (
              <li key={index} className="text-sm text-yellow-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                {req.equipment} - {req.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      <textarea
        value={item.observations || ''}
        onChange={(e) => onObservationChange(item.id, e.target.value)}
        placeholder="Observações..."
        className="w-full border rounded-lg p-2 text-sm"
        rows={2}
      />
    </div>
  );
}