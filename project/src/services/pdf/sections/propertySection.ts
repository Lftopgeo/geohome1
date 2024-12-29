import { jsPDF } from 'jspdf';
import { addSection, addText, checkPageBreak } from '../utils/pdfUtils';
import type { TechnicalInspection } from '../../inspection/types';

export async function addPropertySection(doc: jsPDF, inspection: TechnicalInspection, startY: number): Promise<number> {
  let y = startY;
  
  y = addSection(doc, 'Dados do Imóvel', y);
  doc.setFontSize(12);
  
  y = addText(doc, `Endereço: ${inspection.property.address}`, y);
  y = addText(doc, `Área: ${inspection.property.area}m²`, y + 10);
  y = addText(doc, `Tipo de Construção: ${inspection.property.construction_type}`, y + 10);
  
  return checkPageBreak(doc, y + 20);
}