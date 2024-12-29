import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaCard } from './AreaCard';
import { Home, Building2, Key } from 'lucide-react';

const areas = [
  {
    id: 'internal',
    title: 'Ambiente Interno',
    icon: Home,
    description: 'Quartos, salas, cozinha, banheiros e demais áreas internas',
    path: '/ambiente-interno',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80'
  },
  {
    id: 'external',
    title: 'Ambiente Externo',
    icon: Building2,
    description: 'Fachada, jardim, garagem e áreas comuns',
    path: '/ambiente-externo',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80'
  },
  {
    id: 'keys',
    title: 'Chaves e Medidores',
    icon: Key,
    description: 'Chaves, medidores de água, luz e gás',
    path: '/chaves-medidores',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80'
  }
];

export function AreaSelector() {
  const navigate = useNavigate();

  const handleAreaSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {areas.map((area) => (
        <AreaCard
          key={area.id}
          {...area}
          onClick={() => handleAreaSelect(area.path)}
        />
      ))}
    </div>
  );
}