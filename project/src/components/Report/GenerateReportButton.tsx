import React from 'react';
import { FileText } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { InspectionReport } from './InspectionReport';

interface GenerateReportButtonProps {
  inspectionData: any; // Use proper type from your application
}

export function GenerateReportButton({ inspectionData }: GenerateReportButtonProps) {
  return (
    <PDFDownloadLink
      document={<InspectionReport inspectionData={inspectionData} />}
      fileName={`vistoria-${inspectionData.protocol}.pdf`}
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] transition-colors"
    >
      <FileText size={20} />
      <span>Gerar Relatório</span>
    </PDFDownloadLink>
  );
}