import React, { useState } from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { ActionButtons } from '../components/ActionButtons';
import { BackButton } from '../components/common/BackButton';
import { EditRoomDialog } from '../components/Room/EditRoom/EditRoomDialog';
import { NewRoomDialog } from '../components/Room/NewRoom/NewRoomDialog';
import { SaveAndNavigateButton } from '../components/SaveAndNavigateButton';
import { RoomIcon } from '../components/Room/RoomIcon';
import { bathroomItems } from '../data/bathroomItems';
import { kitchenItems } from '../data/kitchenItems';
import { bedroomItems } from '../data/bedroomItems';
import { livingRoomItems } from '../data/livingRoomItems';
import type { Room } from '../types';

export function InternalRoomsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [showNewRoom, setShowNewRoom] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: '1',
      name: 'Banheiro',
      status: 'good',
      observations: 'Ótimo estado, sem infiltrações',
      photos: [],
      items: bathroomItems
    },
    {
      id: '2',
      name: 'Cozinha',
      status: 'regular',
      observations: 'Armários precisam de manutenção',
      photos: [],
      items: kitchenItems
    },
    {
      id: '3',
      name: 'Quarto',
      status: 'good',
      observations: 'Pintura em bom estado',
      photos: [],
      items: bedroomItems
    },
    {
      id: '4',
      name: 'Sala',
      status: 'bad',
      observations: 'Infiltração no teto',
      photos: [],
      items: livingRoomItems
    }
  ]);

  const handleEditRoom = (id: string) => {
    const room = rooms.find(r => r.id === id);
    if (room) {
      setEditingRoom(room);
    }
  };

  const handleSaveRoom = (updatedRoom: Room) => {
    setRooms(prev => prev.map(room => 
      room.id === updatedRoom.id ? updatedRoom : room
    ));
    setEditingRoom(null);
  };

  const handleNewRoom = (newRoom: Room) => {
    setRooms(prev => [...prev, newRoom]);
  };

  // Filter rooms based on search term
  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton to="/areas-vistoria" />
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ambiente Interno</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 flex-wrap">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
                <ActionButtons onNewRoom={() => setShowNewRoom(true)} />
              </div>

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
                    {filteredRooms.map((room) => (
                      <tr key={room.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <RoomIcon 
                              roomName={room.name} 
                              className="text-gray-500"
                            />
                            <span>{room.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">Sim</td>
                        <td className="py-4 px-4">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleEditRoom(room.id)}
                              className="p-2 text-gray-400 hover:text-[#DDA76A]"
                              title="Editar"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                            <button
                              className="p-2 text-gray-400 hover:text-[#DDA76A]"
                              title="Histórico"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-between items-center mt-4 px-4 text-sm text-gray-600">
                  <span>1 - {filteredRooms.length} de {filteredRooms.length}</span>
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
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <SaveAndNavigateButton 
            onSave={async () => {
              // Add your save logic here
              console.log('Saving internal rooms data...');
            }}
          />
        </div>
      </main>

      {editingRoom && (
        <EditRoomDialog
          room={editingRoom}
          onClose={() => setEditingRoom(null)}
          onSave={handleSaveRoom}
        />
      )}

      {showNewRoom && (
        <NewRoomDialog
          onClose={() => setShowNewRoom(false)}
          onSave={handleNewRoom}
        />
      )}
    </div>
  );
}