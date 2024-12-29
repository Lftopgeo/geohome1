import React from 'react';
import { Edit2, History } from 'lucide-react';
import type { Room } from '../../types';

interface RoomTableProps {
  rooms: Room[];
  onEdit: (id: string) => void;
}

export function RoomTable({ rooms, onEdit }: RoomTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 text-gray-600 font-medium">NOME</th>
            <th className="text-right py-3 px-4 text-gray-600 font-medium">ATIVO</th>
            <th className="w-24"></th>
          </tr>
        </thead>
        <tbody>
          {rooms.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center py-8 text-gray-500">
                Nenhum ambiente cadastrado
              </td>
            </tr>
          ) : (
            rooms.map((room) => (
              <tr key={room.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{room.name}</td>
                <td className="py-4 px-4 text-right">Sim</td>
                <td className="py-4 px-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(room.id)}
                      className="p-1 text-gray-600 hover:text-[#DDA76A]"
                      title="Editar"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      className="p-1 text-gray-600 hover:text-[#DDA76A]"
                      title="Histórico"
                    >
                      <History size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4 px-4 text-sm text-gray-600">
        <span>1 - 4 de 4</span>
        <div className="flex gap-2">
          <button className="p-1" disabled>
            ‹
          </button>
          <button className="p-1" disabled>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}