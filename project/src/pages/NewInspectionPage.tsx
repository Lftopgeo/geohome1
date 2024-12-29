import React from 'react';
import { InspectionForm } from '../components/Inspection/InspectionForm';
import { InspectionSteps } from '../components/InspectionSteps/InspectionSteps';
import { NavigationMenu } from '../components/Navigation/NavigationMenu';

export function NewInspectionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationMenu />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <InspectionSteps currentStep="new-inspection" />
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Nova Vistoria</h1>
            <InspectionForm />
          </div>
        </div>
      </main>
    </div>
  );
}