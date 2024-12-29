export interface TechnicalInspection {
  id: string;
  created_at: string;
  property: {
    address: string;
    area: number;
    construction_type: string;
    zip_code: string;
    city: string;
    state: string;
  };
  structural_conditions: {
    walls: string;
    ceiling: string;
    floor: string;
    observations: string;
  };
  installations: {
    electrical: {
      status: string;
      observations: string;
    };
    hydraulic: {
      status: string;
      observations: string;
    };
  };
  inspector: {
    name: string;
    registration: string;
    signature: string;
  };
  photos: {
    url: string;
    description: string;
    type: 'structural' | 'electrical' | 'hydraulic' | 'general';
  }[];
}