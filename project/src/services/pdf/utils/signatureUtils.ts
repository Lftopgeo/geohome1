import { jsPDF } from 'jspdf';
import { isValidBase64Image, cleanBase64Data, getImageFormat } from './base64Utils';

interface SignatureOptions {
  signature: string;
  name: string;
  registration: string;
  x: number;
  y: number;
}

export function addSignature(doc: jsPDF, options: SignatureOptions): void {
  try {
    if (!isValidBase64Image(options.signature)) {
      addFallbackSignature(doc, options);
      return;
    }

    const format = getImageFormat(options.signature);
    const cleanData = cleanBase64Data(options.signature);

    // Add signature image - fixed parameter list with comma
    doc.addImage(
      cleanData,
      format,
      options.x,
      options.y,
      50,  // width
      30,  // height
      'signature'  // alias
    );

    addSignatureText(doc, options);
  } catch (error) {
    console.error('Error adding signature:', error);
    addFallbackSignature(doc, options);
  }
}

// Rest of the file remains unchanged...