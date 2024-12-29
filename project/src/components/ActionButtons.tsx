import React from 'react';
import { Filter, Plus } from 'lucide-react';

interface ActionButtonsProps {
  onNewRoom: () => void;
}

export function ActionButtons({ onNewRoom }: ActionButtonsProps) {
  return (
    <>
      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
        <Filter size={20} />
        <span>Filtrar</span>
      </button>
      
      <button 
        onClick={onNewRoom}
        className="flex items-center gap-2 px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355]"
      >
        <Plus size={20} />
        <span>Novo Ambiente</span>
      </button>
    </>
  );
}