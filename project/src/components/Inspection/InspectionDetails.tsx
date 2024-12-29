import React from 'react';

export function InspectionDetails() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Dados da Vistoria</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Vistoria
          </label>
          <select className="w-full px-3 py-2 border rounded-lg" required>
            <option value="">Selecione o tipo</option>
            <option value="entrada">Vistoria de Entrada</option>
            <option value="saida">Vistoria de Saída</option>
            <option value="periodica">Vistoria Periódica</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data Preferencial
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Observações
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}