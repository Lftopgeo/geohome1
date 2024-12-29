export type PropertyType = 'apartment' | 'house' | 'land' | 'commercial';

export type PropertySubtype = 
  | 'studio' | 'kitnet' | 'coverage' | 'duplex' | 'standard'  // apartment
  | 'ground' | 'twostory' | 'condo' | 'village'              // house
  | 'residential' | 'commercial' | 'industrial' | 'rural'     // land
  | 'office' | 'store' | 'warehouse' | 'building'            // commercial
  | 'other';                                                 // all types

export type FurnishingStatus = 'furnished' | 'semi_furnished' | 'unfurnished';

export interface PropertyDetails {
  type: PropertyType;
  subtype: PropertySubtype;
  totalArea: number;
  builtArea: number;
  furnishing: FurnishingStatus;
  address: {
    street: string;
    number: string;
    complement?: string;
    zipCode: string;
  };
}