import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { KeysList } from '../components/KeysAndMeters/KeysList';
import { MetersList } from '../components/KeysAndMeters/MetersList';
import type { MeterReading, KeyItem } from '../types/keysAndMeters';

export function MeterAndKeysPage() {
  const [keys, setKeys] = useState<KeyItem[]>([]);
  const [meters, setMeters] = useState<MeterReading[]>([]);

  const handleAddKey = (newKey: KeyItem) => {
    setKeys(prev => [...prev, newKey]);
  };

  const handleAddMeter = (newMeter: MeterReading) => {
    setMeters(prev => [...prev, newMeter]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Chaves e Medidores</h1>
        <p className="text-gray-600 mt-2">Gerencie suas chaves e medidores em um só lugar</p>
      </div>

      <Tabs defaultValue="keys" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="keys" className="text-lg">
            Chaves
          </TabsTrigger>
          <TabsTrigger value="meters" className="text-lg">
            Medidores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="keys">
          <KeysList keys={keys} onAddKey={handleAddKey} />
        </TabsContent>

        <TabsContent value="meters">
          <MetersList meters={meters} onAddMeter={handleAddMeter} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
