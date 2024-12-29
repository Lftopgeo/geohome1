export function formatStatus(status: string): string {
  const statusMap: Record<string, string> = {
    'good': 'Bom',
    'regular': 'Regular',
    'bad': 'Ruim',
    'optimal': 'Ótimo'
  };
  
  return statusMap[status] || status;
}