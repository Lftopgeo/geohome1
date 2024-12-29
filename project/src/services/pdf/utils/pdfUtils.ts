import { jsPDF } from 'jspdf';

interface HeaderOptions {
  title: string;
  protocol: string;
  date: Date;
  inspector: string;
}

export function addHeader(doc: jsPDF, options: HeaderOptions, y: number = 20): number {
  doc.setFontSize(20);
  doc.text(options.title, 20, y);
  
  doc.setFontSize(12);
  doc.text([
    `Protocolo: ${options.protocol}`,
    `Data: ${options.date.toLocaleDateString()}`,
    `Hora: ${options.date.toLocaleTimeString()}`,
    `Vistoriador: ${options.inspector}`
  ], 20, y + 15);
  
  return y + 40;
}

export function addSection(doc: jsPDF, title: string, y: number): number {
  doc.setFontSize(16);
  doc.text(title, 20, y);
  return y + 15;
}

export function addText(doc: jsPDF, text: string, y: number, indent: number = 20): number {
  const maxWidth = doc.internal.pageSize.width - 40;
  const lines = doc.splitTextToSize(text, maxWidth - indent);
  doc.text(lines, indent, y);
  return y + (lines.length * 7);
}

export async function addImage(doc: jsPDF, url: string, y: number): Promise<number> {
  try {
    // Skip image if URL is invalid
    if (!url || !url.startsWith('http')) {
      console.warn('Invalid image URL:', url);
      return y;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load image: ${response.statusText}`);
    }

    const blob = await response.blob();
    const base64 = await blobToBase64(blob);

    const img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = base64;
    });

    const imgWidth = 150;
    const imgHeight = (img.height * imgWidth) / img.width;
    
    // Check if we need a new page for the image
    if (y + imgHeight > doc.internal.pageSize.height - 40) {
      doc.addPage();
      y = 20;
    }

    doc.addImage(base64, 'JPEG', 20, y, imgWidth, imgHeight);
    return y + imgHeight + 10;
  } catch (error) {
    console.error('Error loading image:', error);
    return y;
  }
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function checkPageBreak(doc: jsPDF, y: number): number {
  const pageHeight = doc.internal.pageSize.height;
  if (y > pageHeight - 40) {
    doc.addPage();
    return 20;
  }
  return y;
}

export function addPageNumbers(doc: jsPDF) {
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.text(
      `Página ${i} de ${totalPages}`,
      doc.internal.pageSize.width - 30,
      doc.internal.pageSize.height - 10
    );
  }
}