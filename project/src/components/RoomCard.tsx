import React from 'react';
import { Camera, Edit2, MoreVertical } from 'lucide-react';
import type { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onEdit: (id: string) => void;
}

export function RoomCard({ room, onEdit }: RoomCardProps) {
  const statusColors = {
    good: 'bg-green-100 text-green-800',
    regular: 'bg-yellow-100 text-yellow-800',
    bad: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{room.name}</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreVertical size={20} />
        </button>
      </div>
      
      <div className="space-y-3">
        <div className={`inline-block px-2 py-1 rounded-full text-sm ${statusColors[room.status]}`}>
          {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {room.observations || 'Sem observações'}
        </p>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2 text-gray-500">
            <Camera size={18} />
            <span className="text-sm">{room.photos.length} fotos</span>
          </div>
          
          <button
            onClick={() => onEdit(room.id)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-500"
          >
            <Edit2 size={18} />
            <span className="text-sm">Editar</span>
          </button>
        </div>
      </div>
    </div>
  );
}