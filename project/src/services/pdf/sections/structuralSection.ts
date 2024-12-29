import { jsPDF } from 'jspdf';
import { addSection, addText, checkPageBreak } from '../utils/pdfUtils';
import type { TechnicalInspection } from '../../inspection/types';

export async function addStructuralSection(doc: jsPDF, inspection: TechnicalInspection, startY: number): Promise<number> {
  let y = startY;
  
  y = addSection(doc, 'Condições Estruturais', y);
  doc.setFontSize(12);
  
  y = addText(doc, `Paredes: ${inspection.structural_conditions.walls}`, y);
  y = addText(doc, `Teto: ${inspection.structural_conditions.ceiling}`, y + 10);
  y = addText(doc, `Piso: ${inspection.structural_conditions.floor}`, y + 10);
  
  if (inspection.structural_conditions.observations) {
    y = addText(doc, `Observações: ${inspection.structural_conditions.observations}`, y + 10);
  }
  
  return checkPageBreak(doc, y + 20);
}