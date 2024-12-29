// Utility functions for handling base64 data
export function isValidBase64Image(data: string): boolean {
  return Boolean(
    data &&
    typeof data === 'string' &&
    data.startsWith('data:image') &&
    data.includes(';base64,')
  );
}

export function cleanBase64Data(data: string): string {
  if (!data.includes(';base64,')) return data;
  return data.split(';base64,')[1];
}

export function getImageFormat(data: string): string {
  if (!data.includes('data:image/')) return 'PNG';
  const match = data.match(/data:image\/([a-zA-Z0-9]+);/);
  return match ? match[1].toUpperCase() : 'PNG';
}