import { jsPDF } from 'jspdf';
import { addSection, addText, checkPageBreak } from '../utils/pdfUtils';
import type { TechnicalInspection } from '../../inspection/types';

export async function addRecommendationsSection(doc: jsPDF, inspection: TechnicalInspection, startY: number): Promise<number> {
  let y = startY;
  
  y = addSection(doc, 'Recomendações Técnicas', y);
  doc.setFontSize(12);
  
  // Add recommendations based on structural conditions
  if (inspection.structural_conditions.observations) {
    y = addText(doc, 'Estrutura:', y);
    y = addText(doc, inspection.structural_conditions.observations, y + 7, 30);
    y = checkPageBreak(doc, y + 15);
  }
  
  // Add recommendations based on installations
  if (inspection.installations.electrical.observations) {
    y = addText(doc, 'Instalações Elétricas:', y);
    y = addText(doc, inspection.installations.electrical.observations, y + 7, 30);
    y = checkPageBreak(doc, y + 15);
  }
  
  if (inspection.installations.hydraulic.observations) {
    y = addText(doc, 'Instalações Hidráulicas:', y);
    y = addText(doc, inspection.installations.hydraulic.observations, y + 7, 30);
  }
  
  return checkPageBreak(doc, y + 20);
}