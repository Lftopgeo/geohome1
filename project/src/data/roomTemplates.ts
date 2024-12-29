import type { Room } from '../types';

export const roomTemplates: Record<string, Partial<Room>> = {
  bathroom: {
    name: 'Banheiro',
    description: 'Banheiro com revestimento cerâmico, box de vidro e metais cromados.',
    status: 'good',
    observations: '',
    photos: [],
    items: []
  },
  kitchen: {
    name: 'Cozinha',
    description: 'Cozinha com armários planejados, bancada em granito e eletrodomésticos.',
    status: 'good',
    observations: '',
    photos: [],
    items: []
  },
  bedroom: {
    name: 'Quarto',
    description: 'Quarto com piso em porcelanato, iluminação central e preparação para ar condicionado.',
    status: 'good',
    observations: '',
    photos: [],
    items: []
  },
  livingRoom: {
    name: 'Sala',
    description: 'Sala de estar com piso em porcelanato, iluminação planejada e pontos para TV.',
    status: 'good',
    observations: '',
    photos: [],
    items: []
  }
};