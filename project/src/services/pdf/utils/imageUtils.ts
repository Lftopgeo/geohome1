import { jsPDF } from 'jspdf';
import { isValidBase64Image, cleanBase64Data, getImageFormat } from './base64Utils';

interface ImageDimensions {
  width: number;
  height: number;
}

export async function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

export function calculateImageDimensions(
  image: HTMLImageElement,
  maxWidth: number,
  maxHeight: number
): ImageDimensions {
  const ratio = Math.min(
    maxWidth / image.width,
    maxHeight / image.height
  );

  return {
    width: image.width * ratio,
    height: image.height * ratio
  };
}

export async function addImageToPDF(
  doc: jsPDF,
  imageData: string,
  x: number,
  y: number,
  options: { maxWidth?: number; maxHeight?: number } = {}
): Promise<{ width: number; height: number }> {
  try {
    if (!isValidBase64Image(imageData)) {
      throw new Error('Invalid image data');
    }

    const format = getImageFormat(imageData);
    const cleanData = cleanBase64Data(imageData);
    
    const img = await loadImage(imageData);
    const dimensions = calculateImageDimensions(
      img,
      options.maxWidth || 150,
      options.maxHeight || 100
    );

    doc.addImage(
      cleanData,
      format,
      x,
      y,
      dimensions.width,
      dimensions.height
    );

    return dimensions;
  } catch (error) {
    console.error('Error adding image to PDF:', error);
    throw error;
  }
}