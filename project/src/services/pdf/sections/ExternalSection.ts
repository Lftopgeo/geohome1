import type { jsPDF } from 'jspdf';
import type { ExternalInspection } from '../../../types/externalInspection';
import { formatStatus } from '../utils/formatters';

export function addExternalSection(doc: jsPDF, data: ExternalInspection, startY: number): number {
  doc.setFontSize(16);
  doc.text('Ambiente Externo', 20, startY);
  
  let currentY = startY + 20;

  // Pool Section
  if (data.pool) {
    doc.setFontSize(14);
    doc.text('Piscina', 20, currentY);
    currentY += 10;
    
    doc.setFontSize(12);
    doc.text(`Dimensões: ${data.pool.dimensions.length}m x ${data.pool.dimensions.width}m x ${data.pool.dimensions.depth}m`, 30, currentY);
    currentY += 7;
    doc.text(`Estado da Água: ${formatStatus(data.pool.waterCondition)}`, 30, currentY);
    currentY += 7;
    doc.text(`Sistema de Filtragem: ${formatStatus(data.pool.filterSystem)}`, 30, currentY);
    currentY += 15;
  }

  // Garden Section
  if (data.garden) {
    doc.setFontSize(14);
    doc.text('Jardim', 20, currentY);
    currentY += 10;
    
    doc.setFontSize(12);
    doc.text(`Paisagismo: ${formatStatus(data.garden.landscaping)}`, 30, currentY);
    currentY += 7;
    doc.text(`Sistema de Irrigação: ${formatStatus(data.garden.irrigation.condition)}`, 30, currentY);
    currentY += 15;
  }

  return currentY;
}