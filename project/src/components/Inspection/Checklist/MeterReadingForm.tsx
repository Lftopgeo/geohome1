import React from 'react';
import type { MeterReading } from './types';

interface MeterReadingFormProps {
  reading: MeterReading;
  onChange: (reading: MeterReading) => void;
}

export function MeterReadingForm({ reading, onChange }: MeterReadingFormProps) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium mb-4">Leitura do Medidor</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Leitura Atual
          </label>
          <input
            type="number"
            value={reading.current}
            onChange={(e) => onChange({ ...reading, current: Number(e.target.value) })}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Leitura Anterior
          </label>
          <input
            type="number"
            value={reading.previous}
            onChange={(e) => onChange({ ...reading, previous: Number(e.target.value) })}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Data da Leitura
        </label>
        <input
          type="date"
          value={reading.date.toISOString().split('T')[0]}
          onChange={(e) => onChange({ ...reading, date: new Date(e.target.value) })}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Consumo</span>
          <span className="text-lg font-semibold">
            {reading.current - reading.previous} m³
          </span>
        </div>
      </div>
    </div>
  );
}