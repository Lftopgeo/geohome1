import React from 'react';

interface ReportFormProps {
  data: {
    comments: string;
    conclusion: string;
  };
  onChange: (updates: Partial<{ comments: string; conclusion: string }>) => void;
}

export function ReportForm({ data, onChange }: ReportFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Comentários do Vistoriador
        </label>
        <textarea
          value={data.comments}
          onChange={(e) => onChange({ comments: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border rounded-lg resize-none"
          placeholder="Adicione seus comentários detalhados sobre a vistoria..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Conclusão Técnica
        </label>
        <textarea
          value={data.conclusion}
          onChange={(e) => onChange({ conclusion: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border rounded-lg resize-none"
          placeholder="Forneça sua conclusão técnica sobre o estado geral do imóvel..."
        />
      </div>
    </div>
  );
}