import React, { useState } from 'react';
import { roomTemplates } from '../../data/roomTemplates';
import type { Room } from '../../types';

interface NewRoomDialogProps {
  onClose: () => void;
  onSave: (room: Room) => void;
}

export function NewRoomDialog({ onClose, onSave }: NewRoomDialogProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [customName, setCustomName] = useState('');
  const [customDescription, setCustomDescription] = useState('');

  const handleSave = () => {
    if (!selectedTemplate && !customName) return;
    
    const template = selectedTemplate ? roomTemplates[selectedTemplate] : null;
    const newRoom: Room = {
      id: crypto.randomUUID(),
      name: customName || template?.name || '',
      description: customDescription || template?.description || '',
      status: 'good',
      observations: '',
      photos: [],
      items: []
    };
    
    onSave(newRoom);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-semibold mb-4">Novo Ambiente</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de ambiente
            </label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome do ambiente
            </label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder={selectedTemplate ? roomTemplates[selectedTemplate].name : 'Digite o nome do ambiente'}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              value={customDescription}
              onChange={(e) => setCustomDescription(e.target.value)}
              placeholder={selectedTemplate ? roomTemplates[selectedTemplate].description : 'Descreva o ambiente'}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!selectedTemplate && !customName}
              className="px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}