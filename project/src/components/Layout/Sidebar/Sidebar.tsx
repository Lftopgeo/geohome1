import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarFooter } from './SidebarFooter';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen bg-[#19384A] text-white transition-transform lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 lg:sticky
      `}>
        <div className="flex flex-col h-full">
          <SidebarHeader />
          <SidebarNavigation currentPath={location.pathname} />
          <SidebarFooter />
        </div>
      </aside>
    </>
  );
}