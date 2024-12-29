import { bedroomItems } from './bedroomItems';
import { bathroomItems } from './bathroomItems';

// Clone dos itens do quarto com algumas adaptações específicas
const masterBedroomItems = [
  ...bedroomItems,
  {
    id: '9',
    name: 'Porta do banheiro',
    description: 'Porta do banheiro da suíte com batentes e guarnições de madeira',
    status: 'good',
    dimensions: {
      width: 70,
      height: 210
    },
    specifications: {
      material: 'Madeira',
      paintType: 'Esmalte',
      color: 'Branco'
    }
  }
];

// Adiciona os itens do banheiro com IDs únicos
const bathroomSuiteItems = bathroomItems.map(item => ({
  ...item,
  id: `suite-${item.id}`, // Prefixo para evitar conflito de IDs
  name: `Suíte - ${item.name}` // Prefixo para identificar itens do banheiro da suíte
}));

export const masterBedroomWithBathroomItems = [...masterBedroomItems, ...bathroomSuiteItems];