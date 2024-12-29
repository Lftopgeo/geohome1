import { useState } from 'react';
import { ReportGenerator } from '../services/reportGenerator';
import { PDFGenerator } from '../services/pdfGenerator';

export function useReportGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateReport = async (data: {
    rooms: any[];
    externalInspection: any;
    comments: string;
    conclusion: string;
    signature: string;
  }) => {
    try {
      setIsGenerating(true);
      setError(null);

      // Generate report data
      const report = ReportGenerator.generateReportData(data);

      // Generate and download PDF
      const pdfBlob = await PDFGenerator.generatePDF(report);
      await PDFGenerator.downloadPDF(pdfBlob, `vistoria-${report.protocol}.pdf`);

      return report;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error generating report';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateReport,
    isGenerating,
    error
  };
}