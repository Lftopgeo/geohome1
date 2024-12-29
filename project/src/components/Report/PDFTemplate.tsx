import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { format } from 'date-fns';
import type { InspectionReport } from '../../types/report';

// Register fonts if needed
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Roboto'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#DDA76A',
    paddingBottom: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#19384A'
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#19384A',
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5
  },
  label: {
    width: 150,
    color: '#666'
  },
  value: {
    flex: 1
  },
  signature: {
    marginTop: 50,
    alignItems: 'center'
  },
  signatureImage: {
    width: 200,
    height: 100,
    marginBottom: 10
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    borderTop: 1,
    borderTopColor: '#DDA76A',
    paddingTop: 10
  }
});

interface PDFTemplateProps {
  report: InspectionReport;
}

export function PDFTemplate({ report }: PDFTemplateProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text>GeoHome Vistorias</Text>
          <View>
            <Text>Data: {format(report.date, 'dd/MM/yyyy')}</Text>
            <Text>Protocolo: {report.protocol}</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Relatório de Vistoria Técnica</Text>

        {/* Inspector Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Responsável Técnico</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{report.inspector.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Registro:</Text>
            <Text style={styles.value}>{report.inspector.id}</Text>
          </View>
        </View>

        {/* Property Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dados do Imóvel</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value}>{report.property.address}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tipo:</Text>
            <Text style={styles.value}>{report.property.type}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Área Total:</Text>
            <Text style={styles.value}>{report.property.totalArea}m²</Text>
          </View>
        </View>

        {/* Technical Opinion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Parecer Técnico</Text>
          <Text>{report.technicalOpinion}</Text>
        </View>

        {/* Signature */}
        <View style={styles.signature}>
          {report.inspector.signature && (
            <Image 
              style={styles.signatureImage} 
              src={report.inspector.signature} 
            />
          )}
          <Text>{report.inspector.name}</Text>
          <Text>Responsável Técnico</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Documento gerado em {format(new Date(), 'dd/MM/yyyy HH:mm')}
          </Text>
        </View>
      </Page>
    </Document>
  );
}