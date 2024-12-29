import { jsPDF } from 'jspdf';
import { addHeader, addPageNumbers } from './utils/pdfUtils';
import { addSignature } from './utils/signatureUtils';
import { addPropertySection } from './sections/propertySection';
import { addStructuralSection } from './sections/structuralSection';
import { addInstallationsSection } from './sections/installationsSection';
import { addPhotosSection } from './sections/photosSection';
import { addRecommendationsSection } from './sections/recommendationsSection';
import type { TechnicalInspection } from '../inspection/types';

export class PDFService {
  static async generateInspectionReport(inspection: TechnicalInspection): Promise<Blob> {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      doc.setFont('helvetica');
      let y = 20;

      // Add sections
      y = addHeader(doc, {
        title: 'Relatório de Vistoria Técnica',
        protocol: inspection.id,
        date: new Date(inspection.created_at),
        inspector: inspection.inspector.name
      }, y);

      try {
        y = await addPropertySection(doc, inspection, y);
        y = await addStructuralSection(doc, inspection, y);
        y = await addInstallationsSection(doc, inspection, y);
        y = await addPhotosSection(doc, inspection, y);
        y = await addRecommendationsSection(doc, inspection, y);
      } catch (error) {
        console.error('Error adding sections:', error);
        throw new Error('Erro ao gerar seções do relatório');
      }

      // Add signature at the bottom of the last page
      const signatureY = doc.internal.pageSize.height - 50;
      addSignature(doc, {
        signature: inspection.inspector.signature,
        name: inspection.inspector.name,
        registration: inspection.inspector.registration,
        x: 20,
        y: signatureY
      });

      addPageNumbers(doc);

      return doc.output('blob', { 
        putCatalog: {
          'PDFAVersion': '1B'
        }
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Falha ao gerar o PDF. Por favor, tente novamente.');
    }
  }
}