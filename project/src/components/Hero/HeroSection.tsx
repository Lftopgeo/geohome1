import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="w-full h-[600px] relative">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Modern interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19384A]/90 to-[#19384A]/70" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vistorias profissionais para seu imóvel
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Documentação detalhada e profissional do estado de conservação de imóveis residenciais e comerciais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/nova-vistoria')}
                className="px-6 py-3 bg-[#DDA76A] text-white rounded-lg font-semibold hover:bg-[#c89355] transition-colors"
              >
                Iniciar Vistoria
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}