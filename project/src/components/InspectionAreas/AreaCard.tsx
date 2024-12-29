import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AreaCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  onClick: () => void;
}

export function AreaCard({ title, description, icon: Icon, image, onClick }: AreaCardProps) {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm border-2 border-transparent 
                 hover:border-[#DDA76A] hover:shadow-md transition-all">
      <div className="flex flex-col items-center text-center h-full">
        {image && (
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-3 bg-[#DDA76A]/10 rounded-full mb-4">
          <Icon size={32} className="text-[#DDA76A]" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        <button
          onClick={onClick}
          className="mt-auto flex items-center gap-2 px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] transition-colors"
        >
          <span>Acesse aqui</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}