export interface KeyItem {
  id: string;
  name: string;
  location: string;
  description?: string;
  status: 'available' | 'in_use';
}

export interface MeterReading {
  id: string;
  type: 'electricity' | 'water' | 'gas';
  meterNumber: string;
  currentReading: number;
  previousReading: number;
  readingDate: string;
  unit: 'kWh' | 'm³';
  hasSolar: boolean;
  solarCapacity: number;
  location: string;
  description?: string;
}