import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropertyDetails } from './PropertyDetails';
import { OwnerDetails } from './OwnerDetails';
import { InspectionDetails } from './InspectionDetails';

export function InspectionForm() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/areas-vistoria');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <PropertyDetails />
      <OwnerDetails />
      <InspectionDetails />
      
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-[#DDA76A] text-white rounded-lg font-semibold hover:bg-[#c89355] transition-colors"
        >
          Continuar
        </button>
      </div>
    </form>
  );
}