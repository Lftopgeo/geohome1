import type { ChecklistData } from '../types/checklist';

export const initialChecklistData: ChecklistData = {
  keys: [
    {
      id: 'key-1',
      label: 'Todas as chaves estão identificadas corretamente',
      isChecked: false,
      observations: ''
    },
    {
      id: 'key-2',
      label: 'Chaves testadas e funcionando',
      isChecked: false,
      observations: ''
    },
    {
      id: 'key-3',
      label: 'Quantidade de cópias confere com o informado',
      isChecked: false,
      observations: ''
    },
    {
      id: 'key-4',
      label: 'Estado das chaves adequado',
      isChecked: false,
      observations: ''
    }
  ],
  meters: [
    {
      id: 'meter-1',
      label: 'Medidores facilmente acessíveis',
      isChecked: false,
      observations: ''
    },
    {
      id: 'meter-2',
      label: 'Leituras iniciais registradas',
      isChecked: false,
      observations: ''
    },
    {
      id: 'meter-3',
      label: 'Lacres dos medidores intactos',
      isChecked: false,
      observations: ''
    },
    {
      id: 'meter-4',
      label: 'Ausência de vazamentos ou irregularidades',
      isChecked: false,
      observations: ''
    }
  ]
};