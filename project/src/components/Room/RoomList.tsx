import React from 'react';
import { RoomCard } from './RoomCard';
import type { Room } from '../../types';

interface RoomListProps {
  rooms: Room[];
  onEdit: (id: string) => void;
}

export function RoomList({ rooms, onEdit }: RoomListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {rooms.map((room) => (
        <RoomCard 
          key={room.id} 
          room={room} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
}