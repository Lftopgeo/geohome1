import React from 'react';
import { Header } from '../components/Header';
import { AreaSelector } from '../components/InspectionAreas/AreaSelector';

export function InspectionAreasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Ambientes da Vistoria</h1>
          <AreaSelector />
        </div>
      </main>
    </div>
  );
}