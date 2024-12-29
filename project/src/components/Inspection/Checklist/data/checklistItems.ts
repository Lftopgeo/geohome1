import { ChecklistItem } from '../types';

export const visualInspectionItems: ChecklistItem[] = [
  {
    id: 'v1',
    category: 'visual',
    title: 'Leitura do Medidor Embasa',
    description: 'Registrar leitura atual e verificar histórico de consumo',
    status: 'pending',
    safetyRequirements: [
      {
        equipment: 'Luvas isolantes',
        description: 'Proteção contra choque elétrico',
        required: true
      }
    ]
  },
  {
    id: 'v2',
    category: 'visual',
    title: 'Inspeção do Display',
    description: 'Verificar clareza e funcionamento do display digital',
    status: 'pending'
  }
];

export const operationalTestItems: ChecklistItem[] = [
  {
    id: 'o1',
    category: 'operational',
    title: 'Teste de Mecanismos',
    description: 'Verificar funcionamento de abertura/fechamento',
    status: 'pending',
    safetyRequirements: [
      {
        equipment: 'Luvas isolantes',
        description: 'Proteção contra choque elétrico',
        required: true
      },
      {
        equipment: 'Óculos de proteção',
        description: 'Proteção contra partículas',
        required: true
      }
    ]
  },
  {
    id: 'o2',
    category: 'operational',
    title: 'Teste de Continuidade',
    description: 'Verificar continuidade elétrica dos circuitos',
    status: 'pending'
  },
  {
    id: 'o3',
    category: 'operational',
    title: 'Medição de Resistência',
    description: 'Verificar resistência de isolamento',
    status: 'pending'
  },
  {
    id: 'o4',
    category: 'operational',
    title: 'Verificação de Aterramento',
    description: 'Testar eficácia do sistema de aterramento',
    status: 'pending'
  }
];