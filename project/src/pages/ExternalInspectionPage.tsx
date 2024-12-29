import React, { useState } from 'react';
import { Header } from '../components/Header';
import { BackButton } from '../components/common/BackButton';
import { ExternalInspectionSection } from '../components/ExternalInspection/ExternalInspectionSection';
import { PoolSection } from '../components/ExternalInspection/PoolSection';
import { GardenSection } from '../components/ExternalInspection/GardenSection';
import { GenerateReportButton } from '../components/ExternalInspection/GenerateReportButton';
import {
  structureItems,
  securityItems,
  cleanlinessItems,
  accessibilityItems,
  installationsItems
} from '../data/externalInspectionItems';
import type { InspectionItem } from '../types/inspection';
import type { PoolInspection, GardenInspection } from '../types/externalInspection';

export function ExternalInspectionPage() {
  const [sections] = useState({
    structure: structureItems,
    security: securityItems,
    cleanliness: cleanlinessItems,
    accessibility: accessibilityItems,
    installations: installationsItems
  });

  const [poolData, setPoolData] = useState<PoolInspection>({
    dimensions: { length: 0, width: 0, depth: 0 },
    waterCondition: 'good',
    filterSystem: 'good',
    observations: '',
    photos: []
  });

  const [gardenData, setGardenData] = useState<GardenInspection>({
    landscaping: 'good',
    irrigation: { system: 'Automático', condition: 'good' },
    recreationArea: 'good',
    maintenance: 'good',
    furniture: 'good',
    observations: '',
    photos: []
  });

  const handleUpdateItem = (sectionKey: string, itemId: string, updates: Partial<InspectionItem>) => {
    // Implementation for updating items
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton to="/areas-vistoria" />
        </div>

        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Ambiente Externo</h1>

          <PoolSection
            data={poolData}
            onUpdate={(updates) => setPoolData(prev => ({ ...prev, ...updates }))}
          />

          <GardenSection
            data={gardenData}
            onUpdate={(updates) => setGardenData(prev => ({ ...prev, ...updates }))}
          />

          <ExternalInspectionSection
            title="Estrutura Física"
            items={sections.structure}
            onUpdateItem={(itemId, updates) => handleUpdateItem('structure', itemId, updates)}
          />

          <ExternalInspectionSection
            title="Segurança"
            items={sections.security}
            onUpdateItem={(itemId, updates) => handleUpdateItem('security', itemId, updates)}
          />

          <ExternalInspectionSection
            title="Limpeza e Organização"
            items={sections.cleanliness}
            onUpdateItem={(itemId, updates) => handleUpdateItem('cleanliness', itemId, updates)}
          />

          <ExternalInspectionSection
            title="Acessibilidade"
            items={sections.accessibility}
            onUpdateItem={(itemId, updates) => handleUpdateItem('accessibility', itemId, updates)}
          />

          <ExternalInspectionSection
            title="Instalações"
            items={sections.installations}
            onUpdateItem={(itemId, updates) => handleUpdateItem('installations', itemId, updates)}
          />

          <div className="flex justify-end mt-8">
            <GenerateReportButton 
              onSave={async () => {
                // Add your save logic here
                console.log('Saving external inspection data...');
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}