import React from 'react';
import { Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-[#19384A] text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Home size={32} className="text-[#DDA76A]" />
          <h1 className="text-2xl font-bold">GeoHome</h1>
        </Link>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link 
                to="/" 
                className="hover:text-[#DDA76A] transition-colors"
              >
                Vistorias
              </Link>
            </li>
            <li>
              <Link
                to="/nova-vistoria"
                className="bg-[#DDA76A] px-4 py-2 rounded-lg hover:bg-[#c89355] transition-colors"
              >
                Iniciar Vistoria
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}