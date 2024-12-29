import React from 'react';
import { FileText, Loader2 } from 'lucide-react';

interface GeneratePDFButtonProps {
  onSave: () => Promise<void>;
  disabled?: boolean;
  isLoading?: boolean;
}

export function GeneratePDFButton({ onSave, disabled, isLoading }: GeneratePDFButtonProps) {
  return (
    <button
      onClick={onSave}
      disabled={disabled || isLoading}
      className="flex items-center gap-2 px-6 py-3 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          <span>Gerando PDF...</span>
        </>
      ) : (
        <>
          <FileText size={20} />
          <span>Gerar PDF</span>
        </>
      )}
    </button>
  );
}