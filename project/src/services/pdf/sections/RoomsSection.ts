import type { jsPDF } from 'jspdf';
import type { Room } from '../../../types';
import { formatStatus } from '../utils/formatters';

export function addRoomsSection(doc: jsPDF, rooms: Room[], startY: number): number {
  doc.setFontSize(16);
  doc.text('Ambientes Internos', 20, startY);
  
  let currentY = startY + 20;
  
  rooms.forEach((room) => {
    doc.setFontSize(14);
    doc.text(room.name, 20, currentY);
    currentY += 10;
    
    doc.setFontSize(12);
    doc.text(`Estado: ${formatStatus(room.status)}`, 30, currentY);
    currentY += 10;
    
    if (room.observations) {
      const lines = doc.splitTextToSize(room.observations, 170);
      doc.text(lines, 30, currentY);
      currentY += (lines.length * 7);
    }
    
    if (room.items.length > 0) {
      currentY += 10;
      doc.text('Itens:', 30, currentY);
      currentY += 10;
      
      room.items.forEach((item) => {
        doc.text(`• ${item.name}: ${formatStatus(item.status)}`, 40, currentY);
        currentY += 7;
      });
    }
    
    currentY += 15;
  });
  
  return currentY;
}