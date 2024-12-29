import React from 'react';
import { 
  Bath, 
  Bed, 
  Sofa, 
  Utensils, 
  BookOpen,
  Warehouse,
  Wind,
  Shirt
} from 'lucide-react';

const iconMap = {
  'Banheiro': Bath,
  'Quarto': Bed,
  'Sala': Sofa,
  'Cozinha': Utensils,
  'Escritório': BookOpen,
  'Garagem': Warehouse,
  'Varanda': Wind,
  'Lavanderia': Shirt
};

interface RoomIconProps {
  roomName: string;
  className?: string;
}

export function RoomIcon({ roomName, className = '' }: RoomIconProps) {
  const Icon = iconMap[roomName as keyof typeof iconMap] || Sofa;
  return <Icon className={className} size={20} />;
}