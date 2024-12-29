import type { InspectionStatus, UrgencyLevel } from './inspection';

export interface PoolInspection {
  dimensions: {
    length: number;
    width: number;
    depth: number;
  };
  waterCondition: InspectionStatus;
  filterSystem: InspectionStatus;
  observations: string;
  photos: string[];
}

export interface GardenInspection {
  landscaping: InspectionStatus;
  irrigation: {
    system: string;
    condition: InspectionStatus;
  };
  recreationArea: InspectionStatus;
  maintenance: InspectionStatus;
  furniture: InspectionStatus;
  observations: string;
  photos: string[];
}

// ... rest of the existing interfaces ...

export interface ExternalInspection {
  pool: PoolInspection;
  garden: GardenInspection;
  garage: GarageInspection;
  structure: StructureInspection;
  security: SecurityInspection;
  accessibility: AccessibilityInspection;
}