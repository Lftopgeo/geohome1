import { jsPDF } from 'jspdf';
import { addSection, addText, addImage, checkPageBreak } from '../utils/pdfUtils';
import type { TechnicalInspection } from '../../inspection/types';

export async function addPhotosSection(doc: jsPDF, inspection: TechnicalInspection, startY: number): Promise<number> {
  let y = startY;
  
  if (inspection.photos.length === 0) {
    return y;
  }
  
  y = addSection(doc, 'Registro Fotográfico', y);
  doc.setFontSize(12);
  
  for (const photo of inspection.photos) {
    y = checkPageBreak(doc, y);
    y = addText(doc, photo.description, y);
    y = await addImage(doc, photo.url, y + 10);
    y += 10;
  }
  
  return checkPageBreak(doc, y + 20);
}