import { format } from 'date-fns';
import type { PDFTemplate } from '../types';
import { formatStatus } from '../utils/formatters';

export const ReportTemplate: PDFTemplate = {
  getHeader: (doc, data) => {
    const pageWidth = doc.internal.pageSize.getWidth();
    
    doc.setFontSize(20);
    doc.text('Relatório de Vistoria', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Protocolo: ${data.protocol}`, 20, 35);
    doc.text(`Data: ${format(data.date, 'dd/MM/yyyy')}`, 20, 45);
  },

  getInspectorSection: (doc, data) => {
    doc.setFontSize(16);
    doc.text('Responsável Técnico', 20, 70);
    
    doc.setFontSize(12);
    doc.text(`Nome: ${data.inspector.name}`, 20, 85);
    doc.text(`Registro: ${data.inspector.id}`, 20, 95);
  },

  getPropertySection: (doc, data) => {
    doc.setFontSize(16);
    doc.text('Dados do Imóvel', 20, 120);
    
    doc.setFontSize(12);
    doc.text(`Endereço: ${data.property.address}`, 20, 135);
    doc.text(`Tipo: ${data.property.type}`, 20, 145);
    doc.text(`Área Total: ${data.property.totalArea}m²`, 20, 155);
  }
};