export type InspectionCondition = 'optimal' | 'good' | 'regular' | 'bad';

export interface MeterInspection {
  meterNumber: string;
  currentReading: number;
  condition: InspectionCondition;
  sealIntact: boolean;
  photos: string[];
  observations?: string;
  
  // Water specific
  leaks?: boolean;
  
  // Electricity specific
  meterType?: 'digital' | 'analog';
  breakersWorking?: boolean;
  
  // Gas specific
  leakTestDone?: boolean;
  safetyValveWorking?: boolean;
}

export interface KeyInventoryItem {
  roomName: string;
  keyCount: number;
  clearlyIdentified: boolean;
  condition: InspectionCondition;
  tested: boolean;
  photos: string[];
  observations?: string;
}

export interface InspectionReport {
  waterMeter: MeterInspection;
  electricityMeter: MeterInspection;
  gasMeter: MeterInspection;
  keys: KeyInventoryItem[];
  generalObservations: {
    anomalies: string;
    maintenance: string;
    recommendations: string;
  };
  inspector: {
    name: string;
    date: Date;
    signature?: string;
  };
}