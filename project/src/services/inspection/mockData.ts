import type { TechnicalInspection } from './types';

export const mockInspection: TechnicalInspection = {
  id: crypto.randomUUID(),
  created_at: new Date().toISOString(),
  property: {
    address: 'Rua das Flores, 123',
    area: 120,
    construction_type: 'Alvenaria',
    zip_code: '01234-567',
    city: 'São Paulo',
    state: 'SP'
  },
  structural_conditions: {
    walls: 'Bom estado geral, pequenas fissuras superficiais no quarto 2',
    ceiling: 'Sem infiltrações, pintura em bom estado',
    floor: 'Cerâmica em bom estado, sem rachaduras',
    observations: 'Estrutura geral em boas condições, necessita apenas manutenção preventiva'
  },
  installations: {
    electrical: {
      status: 'regular',
      observations: 'Quadro de distribuição organizado, necessita atualização do DR'
    },
    hydraulic: {
      status: 'good',
      observations: 'Encanamento sem vazamentos, pressão adequada'
    }
  },
  inspector: {
    name: 'João Silva',
    registration: 'CREA-123456',
    signature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...'
  },
  photos: [
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      description: 'Vista geral da fachada',
      type: 'general'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      description: 'Quadro elétrico principal',
      type: 'electrical'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      description: 'Instalações hidráulicas do banheiro',
      type: 'hydraulic'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      description: 'Detalhe da estrutura da parede',
      type: 'structural'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      description: 'Vista geral do interior',
      type: 'general'
    }
  ]
};