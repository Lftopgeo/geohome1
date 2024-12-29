import type { jsPDF } from 'jspdf';
import type { InspectionReport } from '../../types/report';

export interface PDFTemplate {
  getHeader: (doc: jsPDF, data: InspectionReport) => void;
  getInspectorSection: (doc: jsPDF, data: InspectionReport) => void;
  getPropertySection: (doc: jsPDF, data: InspectionReport) => void;
}