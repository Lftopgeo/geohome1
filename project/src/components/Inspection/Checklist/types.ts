export interface SafetyRequirement {
  equipment: string;
  description: string;
  required: boolean;
}

export interface ChecklistItem {
  id: string;
  category: 'visual' | 'operational' | 'safety';
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  observations?: string;
  safetyRequirements?: SafetyRequirement[];
}

export interface MeterReading {
  current: number;
  previous: number;
  date: Date;
  consumption: number;
}