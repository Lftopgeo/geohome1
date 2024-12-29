import { jsPDF } from 'jspdf';
import { addSection, addText, checkPageBreak } from '../utils/pdfUtils';
import type { TechnicalInspection } from '../../inspection/types';

export async function addInstallationsSection(doc: jsPDF, inspection: TechnicalInspection, startY: number): Promise<number> {
  let y = startY;
  
  y = addSection(doc, 'Instalações', y);
  doc.setFontSize(12);
  
  // Electrical installations
  y = addText(doc, 'Instalações Elétricas:', y);
  y = addText(doc, `Estado: ${inspection.installations.electrical.status}`, y + 7, 30);
  y = addText(doc, `Observações: ${inspection.installations.electrical.observations}`, y + 7, 30);
  
  y = checkPageBreak(doc, y + 15);
  
  // Hydraulic installations
  y = addText(doc, 'Instalações Hidráulicas:', y);
  y = addText(doc, `Estado: ${inspection.installations.hydraulic.status}`, y + 7, 30);
  y = addText(doc, `Observações: ${inspection.installations.hydraulic.observations}`, y + 7, 30);
  
  return checkPageBreak(doc, y + 20);
}