import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SidebarHeader() {
  return (
    <div className="p-4 border-b border-white/10">
      <Link to="/" className="flex items-center gap-2">
        <Home className="text-[#DDA76A]" size={32} />
        <div>
          <span className="text-xl font-bold">GeoHome</span>
          <span className="block text-sm text-gray-400">Vistorias</span>
        </div>
      </Link>
    </div>
  );
}