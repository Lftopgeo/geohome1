import { jsPDF } from 'jspdf';
import { ReportTemplate } from './pdf/templates/ReportTemplate';
import { addRoomsSection } from './pdf/sections/RoomsSection';
import { addExternalSection } from './pdf/sections/ExternalSection';
import { addKeysAndMetersSection } from './pdf/sections/KeysAndMetersSection';
import type { InspectionReport } from '../types/report';

export class PDFGenerator {
  static async generatePDF(data: InspectionReport): Promise<Blob> {
    const doc = new jsPDF();
    let currentY = 20;

    // Add Header
    ReportTemplate.getHeader(doc, data);
    currentY = 70;

    // Add Inspector Section
    ReportTemplate.getInspectorSection(doc, data);
    currentY = 120;

    // Add Property Section
    ReportTemplate.getPropertySection(doc, data);
    currentY = 180;

    // Add Rooms Section
    currentY = addRoomsSection(doc, data.rooms, currentY);
    
    // Add new page if needed
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }

    // Add External Section
    currentY = addExternalSection(doc, data.externalItems, currentY);
    
    // Add new page if needed
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }

    // Add Keys and Meters Section
    currentY = addKeysAndMetersSection(doc, data, currentY);

    // Add Technical Opinion
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }

    doc.setFontSize(16);
    doc.text('Parecer Técnico', 20, currentY);
    currentY += 15;

    doc.setFontSize(12);
    const opinionLines = doc.splitTextToSize(data.technicalOpinion, 170);
    doc.text(opinionLines, 20, currentY);

    // Add signature
    if (data.inspector.signature) {
      doc.addImage(data.inspector.signature, 'PNG', 20, currentY + 40, 50, 30);
      doc.text(data.inspector.name, 20, currentY + 80);
      doc.text('Responsável Técnico', 20, currentY + 87);
    }

    return doc.output('blob');
  }

  static async downloadPDF(blob: Blob, filename: string): Promise<void> {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}