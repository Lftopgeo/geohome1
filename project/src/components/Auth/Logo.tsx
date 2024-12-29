import React from 'react';
import { Home } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <div className="text-[#FFD700]">
          <Home size={32} />
        </div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-[#FFD700]">geo</span>
          <span className="text-3xl font-bold text-[#FFD700]">home</span>
        </div>
      </div>
      <div className="text-[#FFD700] uppercase text-sm tracking-wider mt-1">
        Vistoria
      </div>
    </div>
  );
}