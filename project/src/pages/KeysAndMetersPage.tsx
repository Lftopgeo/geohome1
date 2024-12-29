import React from 'react';
import { Header } from '../components/Header';
import { BackButton } from '../components/common/BackButton';
import { ChecklistContainer } from '../components/KeysAndMeters/Checklist/ChecklistContainer';

export function KeysAndMetersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton to="/areas-vistoria" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Chaves e Medidores</h1>
          <ChecklistContainer />
        </div>
      </main>
    </div>
  );
}