export const livingRoomItems = [
  {
    id: '1',
    name: 'Fechadura e maçaneta',
    description: 'Fechadura e maçaneta de metal cromado',
    status: 'good',
    specifications: {
      material: 'Metal cromado',
      type: 'Cilindro'
    }
  },
  {
    id: '2',
    name: 'Janela',
    description: 'Janela de esquadria de alumínio na cor branca, tipo de correr 2 folhas com vidro temperado 8mm',
    status: 'good',
    dimensions: {
      width: 200,
      height: 160
    },
    specifications: {
      material: 'Alumínio',
      type: 'Correr',
      glass: 'Temperado 8mm',
      color: 'Branco'
    }
  },
  {
    id: '3',
    name: 'Luminária dupla embutida',
    description: 'Luminária dupla embutida de alumínio na cor branca, tipo LED 2x18W',
    status: 'good',
    specifications: {
      type: 'LED',
      power: '2x18W',
      colorTemp: '4000K',
      color: 'Branco',
      material: 'Alumínio'
    }
  },
  {
    id: '4',
    name: 'Parede',
    description: 'Parede de alvenaria com pintura em tinta acrílica fosca na cor branca',
    status: 'bad',
    specifications: {
      paintType: 'Acrílica fosca',
      color: 'Branco',
      finish: 'Fosco',
      issue: 'Infiltração visível'
    }
  },
  {
    id: '5',
    name: 'Piso',
    description: 'Piso de cerâmica na cor branca 60x60cm',
    status: 'good',
    specifications: {
      material: 'Cerâmica',
      size: '60x60cm',
      color: 'Branco'
    }
  },
  {
    id: '6',
    name: 'Porta com batentes e guarnições',
    description: 'Porta com batentes e guarnições de madeira com pintura em tinta esmalte na cor branca',
    status: 'good',
    dimensions: {
      width: 80,
      height: 210
    },
    specifications: {
      material: 'Madeira',
      paintType: 'Esmalte',
      color: 'Branco'
    }
  },
  {
    id: '7',
    name: 'Teto',
    description: 'Teto de alvenaria com pintura em tinta acrílica fosca na cor branca',
    status: 'bad',
    specifications: {
      paintType: 'Acrílica fosca',
      color: 'Branco',
      issue: 'Infiltração'
    }
  },
  {
    id: '8',
    name: 'Tomadas e interruptores',
    description: '5 Tomadas e interruptores de plástico na cor branca',
    status: 'good',
    specifications: {
      quantity: {
        outlets: 5,
        switches: 2
      },
      material: 'Plástico',
      color: 'Branco'
    }
  }
];