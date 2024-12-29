import type { InspectionItem } from '../types/inspection';

export const structureItems: InspectionItem[] = [
  {
    id: '1',
    category: 'structure',
    name: 'Paredes e Muros',
    description: 'Estado de conservação das paredes e muros externos',
    status: 'good',
    photos: []
  },
  {
    id: '2',
    category: 'structure',
    name: 'Telhado e Calhas',
    description: 'Condição do telhado e sistema de calhas',
    status: 'good',
    photos: []
  },
  {
    id: '3',
    category: 'structure',
    name: 'Janelas e Portas',
    description: 'Integridade das janelas e portas externas',
    status: 'good',
    photos: []
  },
  {
    id: '4',
    category: 'structure',
    name: 'Pintura Externa',
    description: 'Estado da pintura das paredes externas',
    status: 'good',
    photos: []
  },
  {
    id: '5',
    category: 'structure',
    name: 'Piso/Calçamento',
    description: 'Condição do piso e calçamento externo',
    status: 'good',
    photos: []
  }
];

export const securityItems: InspectionItem[] = [
  {
    id: '6',
    category: 'security',
    name: 'Iluminação Externa',
    description: 'Funcionamento do sistema de iluminação externa',
    status: 'good',
    photos: []
  },
  {
    id: '7',
    category: 'security',
    name: 'Portões e Fechaduras',
    description: 'Estado dos portões e sistemas de fechadura',
    status: 'good',
    photos: []
  },
  {
    id: '8',
    category: 'security',
    name: 'Câmeras e Alarmes',
    description: 'Funcionamento dos sistemas de segurança',
    status: 'good',
    photos: []
  }
];

export const cleanlinessItems: InspectionItem[] = [
  {
    id: '9',
    category: 'cleanliness',
    name: 'Limpeza Geral',
    description: 'Condição geral de limpeza da área externa',
    status: 'good',
    photos: []
  },
  {
    id: '10',
    category: 'cleanliness',
    name: 'Áreas Verdes',
    description: 'Estado de conservação dos jardins',
    status: 'good',
    photos: []
  },
  {
    id: '11',
    category: 'cleanliness',
    name: 'Lixeiras',
    description: 'Estado das lixeiras e coleta de resíduos',
    status: 'good',
    photos: []
  }
];

export const accessibilityItems: InspectionItem[] = [
  {
    id: '12',
    category: 'accessibility',
    name: 'Rampas de Acesso',
    description: 'Condição das rampas de acessibilidade',
    status: 'good',
    photos: []
  },
  {
    id: '13',
    category: 'accessibility',
    name: 'Escadas',
    description: 'Estado das escadas externas',
    status: 'good',
    photos: []
  },
  {
    id: '14',
    category: 'accessibility',
    name: 'Sinalização',
    description: 'Adequação da sinalização de acessibilidade',
    status: 'good',
    photos: []
  }
];

export const installationsItems: InspectionItem[] = [
  {
    id: '15',
    category: 'installations',
    name: 'Instalações Elétricas',
    description: 'Estado das instalações elétricas externas',
    status: 'good',
    photos: []
  },
  {
    id: '16',
    category: 'installations',
    name: 'Tubulações',
    description: 'Condição das tubulações aparentes',
    status: 'good',
    photos: []
  },
  {
    id: '17',
    category: 'installations',
    name: 'Drenagem',
    description: 'Funcionamento do sistema de drenagem',
    status: 'good',
    photos: []
  }
];