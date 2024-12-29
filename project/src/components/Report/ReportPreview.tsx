import React from 'react';
import { format } from 'date-fns';
import type { InspectionReport } from '../../types/report';

interface ReportPreviewProps {
  report: InspectionReport;
}

export function ReportPreview({ report }: ReportPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Relatório de Vistoria</h2>
        <p className="text-gray-600">Protocolo: {report.protocol}</p>
        <p className="text-gray-600">
          Data: {format(report.date, 'dd/MM/yyyy HH:mm')}
        </p>
      </div>

      <div className="space-y-6">
        {/* Inspector Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Responsável Técnico</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Nome</p>
              <p className="font-medium">{report.inspector.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Registro</p>
              <p className="font-medium">{report.inspector.id}</p>
            </div>
          </div>
        </section>

        {/* Client Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Dados do Cliente</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Nome</p>
              <p className="font-medium">{report.client.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Documento</p>
              <p className="font-medium">{report.client.document}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{report.client.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Telefone</p>
              <p className="font-medium">{report.client.phone}</p>
            </div>
          </div>
        </section>

        {/* Property Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Dados do Imóvel</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Endereço</p>
              <p className="font-medium">{report.property.address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tipo</p>
              <p className="font-medium">{report.property.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Área Total</p>
              <p className="font-medium">{report.property.totalArea}m²</p>
            </div>
          </div>
        </section>

        {/* Technical Opinion */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Parecer Técnico</h3>
          <p className="text-gray-700 whitespace-pre-line">
            {report.technicalOpinion}
          </p>
        </section>

        {/* Photos */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Registro Fotográfico</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {report.photos.map((photo, index) => (
              <div key={index} className="space-y-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600">{photo.caption}</p>
                <p className="text-xs text-gray-500">
                  {format(photo.timestamp, 'dd/MM/yyyy HH:mm')}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}