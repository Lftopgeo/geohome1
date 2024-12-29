import { ClipboardList, LayoutGrid, Home, Building2, Key, FileText } from 'lucide-react';
import type { InspectionStep } from './types';

export const INSPECTION_STEPS: InspectionStep[] = [
  {
    id: 'new-inspection',
    icon: ClipboardList,
    label: 'Nova Vistoria',
    path: '/nova-vistoria',
    description: 'Informações iniciais da vistoria'
  },
  {
    id: 'choose-environment',
    icon: LayoutGrid,
    label: 'Escolha do Ambiente',
    path: '/areas-vistoria',
    description: 'Selecione as áreas para inspeção'
  },
  {
    id: 'internal-environment',
    icon: Home,
    label: 'Ambiente Interno',
    path: '/ambiente-interno',
    description: 'Inspeção de áreas internas'
  },
  {
    id: 'external-environment',
    icon: Building2,
    label: 'Ambiente Externo',
    path: '/ambiente-externo',
    description: 'Inspeção de áreas externas'
  },
  {
    id: 'keys-meters',
    icon: Key,
    label: 'Chaves e Medidores',
    path: '/chaves-medidores',
    description: 'Verificação de chaves e medidores'
  },
  {
    id: 'report',
    icon: FileText,
    label: 'Relatório',
    path: '/relatorio',
    description: 'Relatório final da vistoria'
  }
];