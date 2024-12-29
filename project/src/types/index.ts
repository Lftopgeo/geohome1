export interface Room {
  id: string;
  name: string;
  status: 'good' | 'regular' | 'bad';
  observations: string;
  photos: string[];
  items: RoomItem[];
}

export interface RoomItem {
  id: string;
  name: string;
  description: string;
  status: 'good' | 'regular' | 'bad';
  observations?: string;
  photos?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth?: number;
  };
  specifications?: Record<string, any>;
}