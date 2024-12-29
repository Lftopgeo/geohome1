import React from 'react';
import { LogOut } from 'lucide-react';

export function SidebarFooter() {
  return (
    <div className="p-4 border-t border-white/10">
      <button 
        className="flex items-center gap-2 w-full px-3 py-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
        onClick={() => {/* Add logout logic */}}
      >
        <LogOut size={20} />
        <span>Sair</span>
      </button>
    </div>
  );
}