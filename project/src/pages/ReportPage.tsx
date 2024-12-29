import React, { useState } from 'react';
import { Header } from '../components/Header';
import { BackButton } from '../components/common/BackButton';
import { ReportForm } from '../components/Report/ReportForm';
import { GeneratePDFButton } from '../components/Report/GeneratePDFButton';
import { PDFService } from '../services/pdf/pdfService';
import { mockInspection } from '../services/inspection/mockData';

export function ReportPage() {
  const [reportData, setReportData] = useState({
    comments: '',
    conclusion: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      // In a real app, you would get this data from your state management
      const inspectionData = {
        ...mockInspection,
        structural_conditions: {
          ...mockInspection.structural_conditions,
          observations: reportData.comments
        }
      };

      const pdfBlob = await PDFService.generateInspectionReport(inspectionData);
      
      // Download the PDF
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `vistoria-${new Date().getTime()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro ao gerar o PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton to="/ambiente-externo" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Relatório Final</h1>

          <ReportForm
            data={reportData}
            onChange={(updates) => setReportData(prev => ({ ...prev, ...updates }))}
          />

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <GeneratePDFButton 
              onSave={handleSave}
              disabled={isGenerating}
              isLoading={isGenerating}
            />
          </div>
        </div>
      </main>
    </div>
  );
}