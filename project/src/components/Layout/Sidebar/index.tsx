import { Link, useLocation } from 'react-router-dom';
import { Home, ClipboardList, Gauge } from 'lucide-react';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      label: 'Início',
      icon: Home,
      path: '/'
    },
    {
      label: 'Vistorias',
      icon: ClipboardList,
      path: '/nova-vistoria'
    },
    {
      label: 'Chaves e Medidores',
      icon: Gauge,
      path: '/chaves-e-medidores'
    }
  ];

  return (
    <aside className="bg-white w-64 min-h-screen shadow-sm">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#DDA76A] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
