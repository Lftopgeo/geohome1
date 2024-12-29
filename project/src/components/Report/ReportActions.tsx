import React from 'react';
import { FileText, Mail, Download, Cloud } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { InspectionReport } from './InspectionReport';
import type { InspectionReport as InspectionReportType } from '../../types/report';

interface ReportActionsProps {
  report: InspectionReportType;
  onEmailSend?: () => void;
  onCloudUpload?: () => void;
}

export function ReportActions({ report, onEmailSend, onCloudUpload }: ReportActionsProps) {
  return (
    <div className="flex gap-4">
      <PDFDownloadLink
        document={<InspectionReport inspectionData={report} />}
        fileName={`vistoria-${report.protocol}.pdf`}
      >
        {({ loading }) => (
          <button
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] disabled:opacity-50"
          >
            <Download size={20} />
            <span>{loading ? 'Gerando...' : 'Download PDF'}</span>
          </button>
        )}
      </PDFDownloadLink>

      <button
        onClick={onEmailSend}
        className="flex items-center gap-2 px-4 py-2 border border-[#DDA76A] text-[#DDA76A] rounded-lg hover:bg-[#DDA76A] hover:text-white"
      >
        <Mail size={20} />
        <span>Enviar por Email</span>
      </button>

      <button
        onClick={onCloudUpload}
        className="flex items-center gap-2 px-4 py-2 border border-[#DDA76A] text-[#DDA76A] rounded-lg hover:bg-[#DDA76A] hover:text-white"
      >
        <Cloud size={20} />
        <span>Salvar na Nuvem</span>
      </button>
    </div>
  );
}