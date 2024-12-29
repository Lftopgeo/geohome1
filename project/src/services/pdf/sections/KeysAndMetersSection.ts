import type { jsPDF } from 'jspdf';
import type { InspectionReport } from '../../../types/inspection';
import { formatStatus } from '../utils/formatters';

export function addKeysAndMetersSection(doc: jsPDF, data: InspectionReport, startY: number): number {
  doc.setFontSize(16);
  doc.text('Chaves e Medidores', 20, startY);
  
  let currentY = startY + 20;

  // Meters
  doc.setFontSize(14);
  doc.text('Medidores', 20, currentY);
  currentY += 15;

  // Water Meter
  doc.setFontSize(12);
  doc.text('Medidor de Água:', 30, currentY);
  currentY += 7;
  doc.text(`Número: ${data.waterMeter.meterNumber}`, 40, currentY);
  currentY += 7;
  doc.text(`Leitura: ${data.waterMeter.currentReading}`, 40, currentY);
  currentY += 15;

  // Electricity Meter
  doc.text('Medidor de Energia:', 30, currentY);
  currentY += 7;
  doc.text(`Número: ${data.electricityMeter.meterNumber}`, 40, currentY);
  currentY += 7;
  doc.text(`Leitura: ${data.electricityMeter.currentReading}`, 40, currentY);
  currentY += 15;

  // Keys
  doc.setFontSize(14);
  doc.text('Chaves', 20, currentY);
  currentY += 15;

  data.keys.forEach((key) => {
    doc.setFontSize(12);
    doc.text(`${key.roomName}: ${key.keyCount} chave(s)`, 30, currentY);
    currentY += 7;
    doc.text(`Estado: ${formatStatus(key.condition)}`, 40, currentY);
    currentY += 10;
  });

  return currentY;
}