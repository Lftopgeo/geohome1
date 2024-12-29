import React from 'react';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GenerateReportButtonProps {
  onSave?: () => Promise<void>;
  className?: string;
}

export function GenerateReportButton({ onSave, className = '' }: GenerateReportButtonProps) {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      if (onSave) {
        await onSave();
      }
      navigate('/relatorio');
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-6 py-3 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] transition-colors ${className}`}
    >
      <FileText size={20} />
      <span>Salvar e Gerar Relatório</span>
    </button>
  );
}