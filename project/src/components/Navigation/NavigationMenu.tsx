import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

export function NavigationMenu() {
  return (
    <nav className="bg-[#19384A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex items-center gap-4">
            <Link to="/vistorias" className="hover:text-[#DDA76A]">
              Vistorias
            </Link>
            <Link
              to="/nova-vistoria"
              className="px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] transition-colors"
            >
              Iniciar Vistoria
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}