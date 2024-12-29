import React, { useState } from 'react';
import { ClipboardList, CheckCircle, Building2, Users, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/Hero/HeroSection';
import { ScheduleInspectionDialog } from '../components/Scheduling/ScheduleInspectionDialog';

const benefits = [
  {
    icon: <CheckCircle size={24} />,
    title: 'Documentação Detalhada',
    description: 'Registro minucioso de todos os aspectos do imóvel'
  },
  {
    icon: <Building2 size={24} />,
    title: 'Cobertura Completa',
    description: 'Avaliação de todos os cômodos e áreas do imóvel'
  },
  {
    icon: <Users size={24} />,
    title: 'Profissionais Qualificados',
    description: 'Equipe especializada em vistorias imobiliárias'
  }
];

const features = [
  {
    title: 'Vistoria de Entrada',
    description: 'Documentação completa do estado do imóvel no início da locação'
  },
  {
    title: 'Vistoria de Saída',
    description: 'Comparativo detalhado com a vistoria inicial para identificar alterações'
  },
  {
    title: 'Laudos Técnicos',
    description: 'Relatórios profissionais com fotos e descrições detalhadas'
  }
];

export function LandingPage() {
  const [showScheduling, setShowScheduling] = useState(false);

  const handleSchedule = (date: Date) => {
    // Here you would typically save the scheduled date to your backend
    console.log('Scheduled for:', date);
    // Show success message or redirect to confirmation page
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso serviço?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#DDA76A] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 border rounded-lg hover:border-[#DDA76A] transition-colors">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#DDA76A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-[#DDA76A] hover:text-[#c89355]">
                  Saiba mais <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#19384A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Agende agora sua vistoria e garanta a segurança do seu imóvel
          </p>
          <button
            onClick={() => setShowScheduling(true)}
            className="px-8 py-4 bg-[#DDA76A] text-white rounded-lg font-semibold hover:bg-[#c89355] transition-colors"
          >
            Agendar Vistoria
          </button>
        </div>
      </section>

      {showScheduling && (
        <ScheduleInspectionDialog
          onClose={() => setShowScheduling(false)}
          onSchedule={handleSchedule}
        />
      )}
    </div>
  );
}