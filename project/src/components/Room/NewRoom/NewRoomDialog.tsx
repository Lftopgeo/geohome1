import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Room } from '../../../types';
import { roomTemplates } from '../../../data/roomTemplates';

interface NewRoomDialogProps {
  onClose: () => void;
  onSave: (room: Room) => void;
}

export function NewRoomDialog({ onClose, onSave }: NewRoomDialogProps) {
  const [name, setName] = useState('');
  const [template, setTemplate] = useState('');
  const [observations, setObservations] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newRoom: Room = {
      id: crypto.randomUUID(),
      name: name,
      status: 'good',
      observations: observations,
      photos: [],
      items: template ? roomTemplates[template].items || [] : []
    };
    
    onSave(newRoom);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Novo Ambiente</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Ambiente
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Modelo
            </label>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">Personalizado</option>
              <option value="bathroom">Banheiro</option>
              <option value="kitchen">Cozinha</option>
              <option value="bedroom">Quarto</option>
              <option value="livingRoom">Sala</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Observações
            </label>
            <textarea
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border rounded-lg resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355]"
            >
              Criar Ambiente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}