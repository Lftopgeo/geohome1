import { format } from 'date-fns';
import type { InspectionReport } from '../types/report';

export class ReportGenerator {
  static generateReportData(data: {
    rooms: any[];
    externalInspection: any;
    comments: string;
    conclusion: string;
    signature: string;
  }): InspectionReport {
    return {
      id: crypto.randomUUID(),
      protocol: this.generateProtocol(),
      date: new Date(),
      inspector: {
        id: '123', // Replace with actual inspector ID
        name: 'John Doe', // Replace with actual inspector name
        signature: data.signature
      },
      client: {
        name: 'Client Name', // Replace with actual client data
        document: '123.456.789-00',
        email: 'client@example.com',
        phone: '(11) 99999-9999',
        address: 'Client Address'
      },
      property: {
        address: 'Property Address', // Replace with actual property data
        type: 'Apartment',
        totalArea: 100,
        buildingType: 'Residential'
      },
      rooms: data.rooms,
      externalItems: data.externalInspection,
      photos: [],
      technicalOpinion: data.conclusion,
      status: 'completed'
    };
  }

  private static generateProtocol(): string {
    const date = format(new Date(), 'yyyyMMdd');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `VST${date}${random}`;
  }
}