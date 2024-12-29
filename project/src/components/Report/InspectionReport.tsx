import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  Image,
  Font 
} from '@react-pdf/renderer';
import { format } from 'date-fns';
import type { Room, InspectionItem } from '../../types';

interface InspectionReportProps {
  inspectionData: {
    protocol: string;
    date: Date;
    inspector: {
      name: string;
      id: string;
    };
    client: {
      name: string;
      document: string;
      address: string;
      phone: string;
      email: string;
    };
    property: {
      address: string;
      type: string;
      totalArea: number;
      buildingType: string;
    };
    rooms: Room[];
    externalItems: InspectionItem[];
  };
}

// Register fonts
Font.register({
  family: 'DIN',
  src: 'https://db.onlinewebfonts.com/t/6dd2f2510b4a00a5461b2455928209c2.ttf'
});

Font.register({
  family: 'Avenir',
  src: 'https://db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Avenir'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottom: 1,
    paddingBottom: 10
  },
  logo: {
    width: 120
  },
  title: {
    fontSize: 24,
    fontFamily: 'DIN',
    color: '#19384A',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'DIN',
    color: '#19384A',
    marginBottom: 10,
    marginTop: 20
  },
  section: {
    marginBottom: 15
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf'
  },
  tableHeader: {
    backgroundColor: '#f3f4f6',
    fontFamily: 'DIN',
    padding: 5
  },
  tableCell: {
    padding: 5,
    flex: 1
  },
  text: {
    fontSize: 10,
    marginBottom: 5
  },
  label: {
    fontFamily: 'DIN',
    fontSize: 10,
    color: '#4b5563'
  },
  value: {
    fontSize: 10,
    marginBottom: 5
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    borderTop: 1,
    paddingTop: 10
  },
  signature: {
    marginTop: 50,
    borderTopWidth: 1,
    borderTopColor: '#000',
    paddingTop: 10,
    width: 200,
    textAlign: 'center'
  }
});

export function InspectionReport({ inspectionData }: InspectionReportProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            src="/logo.png"
            style={styles.logo}
          />
          <View>
            <Text style={styles.text}>Data: {format(inspectionData.date, 'dd/MM/yyyy')}</Text>
            <Text style={styles.text}>Protocolo: {inspectionData.protocol}</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Relatório de Vistoria Técnica</Text>

        {/* Inspector Information */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Responsável Técnico</Text>
          <Text style={styles.text}>Nome: {inspectionData.inspector.name}</Text>
          <Text style={styles.text}>Registro: {inspectionData.inspector.id}</Text>
        </View>

        {/* Client Information */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Dados do Cliente</Text>
          <Text style={styles.text}>Nome: {inspectionData.client.name}</Text>
          <Text style={styles.text}>CPF/CNPJ: {inspectionData.client.document}</Text>
          <Text style={styles.text}>Endereço: {inspectionData.client.address}</Text>
          <Text style={styles.text}>Telefone: {inspectionData.client.phone}</Text>
          <Text style={styles.text}>Email: {inspectionData.client.email}</Text>
        </View>

        {/* Property Information */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Dados do Imóvel</Text>
          <Text style={styles.text}>Endereço: {inspectionData.property.address}</Text>
          <Text style={styles.text}>Tipo: {inspectionData.property.type}</Text>
          <Text style={styles.text}>Área Total: {inspectionData.property.totalArea}m²</Text>
          <Text style={styles.text}>Tipo de Construção: {inspectionData.property.buildingType}</Text>
        </View>

        {/* Inspection Results */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Resultados da Vistoria</Text>
          
          {/* Internal Areas */}
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCell}>Ambiente</Text>
              <Text style={styles.tableCell}>Estado</Text>
              <Text style={styles.tableCell}>Observações</Text>
            </View>
            {inspectionData.rooms.map((room, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{room.name}</Text>
                <Text style={styles.tableCell}>{room.status}</Text>
                <Text style={styles.tableCell}>{room.observations}</Text>
              </View>
            ))}
          </View>

          {/* External Areas */}
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCell}>Item</Text>
              <Text style={styles.tableCell}>Estado</Text>
              <Text style={styles.tableCell}>Urgência</Text>
              <Text style={styles.tableCell}>Observações</Text>
            </View>
            {inspectionData.externalItems.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.name}</Text>
                <Text style={styles.tableCell}>{item.status}</Text>
                <Text style={styles.tableCell}>{item.urgency || 'N/A'}</Text>
                <Text style={styles.tableCell}>{item.observations || 'N/A'}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Signatures */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
          <View style={styles.signature}>
            <Text>Responsável Técnico</Text>
            <Text style={styles.text}>{inspectionData.inspector.name}</Text>
          </View>
          <View style={styles.signature}>
            <Text>Cliente</Text>
            <Text style={styles.text}>{inspectionData.client.name}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.text}>
            Documento gerado em {format(new Date(), 'dd/MM/yyyy HH:mm')}
          </Text>
        </View>
      </Page>
    </Document>
  );
}