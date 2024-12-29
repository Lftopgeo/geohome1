import type { ReportTemplate } from '../types/report';

export const defaultTemplate: ReportTemplate = {
  id: 'default-template',
  name: 'Template Padrão de Vistoria',
  description: 'Template padrão para relatórios de vistoria GeoHome',
  sections: [
    {
      id: 'header',
      name: 'Cabeçalho',
      type: 'header',
      required: true,
      order: 1,
      template: `
        <div class="header">
          <div class="logo"></div>
          <div class="protocol">{{protocol}}</div>
          <div class="date">{{date}}</div>
        </div>
      `
    },
    {
      id: 'property-info',
      name: 'Informações do Imóvel',
      type: 'content',
      required: true,
      order: 2,
      template: `
        <section class="property-info">
          <h2>Informações do Imóvel</h2>
          <div class="info-grid">
            <div class="info-item">
              <label>Endereço:</label>
              <span>{{property.address}}</span>
            </div>
            <div class="info-item">
              <label>Tipo:</label>
              <span>{{property.type}}</span>
            </div>
            <div class="info-item">
              <label>Área Total:</label>
              <span>{{property.totalArea}}m²</span>
            </div>
            <div class="info-item">
              <label>Ano de Construção:</label>
              <span>{{property.constructionYear}}</span>
            </div>
          </div>
        </section>
      `
    },
    {
      id: 'external-inspection',
      name: 'Inspeção Externa',
      type: 'content',
      required: true,
      order: 3,
      template: `
        <section class="external-inspection">
          <h2>Inspeção Externa</h2>
          <div class="inspection-grid">
            {{#each externalAreas}}
              <div class="area-card">
                <h3>{{name}}</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <label>Condição:</label>
                    <span>{{condition}}</span>
                  </div>
                  <div class="info-item">
                    <label>Observações:</label>
                    <span>{{observations}}</span>
                  </div>
                </div>
                <div class="photos-grid">
                  {{#each photos}}
                    <div class="photo-item">
                      <img src="{{url}}" alt="{{caption}}" />
                      <span class="caption">{{caption}}</span>
                    </div>
                  {{/each}}
                </div>
              </div>
            {{/each}}
          </div>
        </section>
      `
    },
    {
      id: 'inspection-areas',
      name: 'Áreas de Inspeção',
      type: 'content',
      required: true,
      order: 4,
      template: `
        <section class="inspection-areas">
          <h2>Áreas de Inspeção</h2>
          <div class="areas-grid">
            {{#each inspectionAreas}}
              <div class="area-card">
                <h3>{{name}}</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <label>Tipo:</label>
                    <span>{{type}}</span>
                  </div>
                  <div class="info-item">
                    <label>Estado Geral:</label>
                    <span>{{overallCondition}}</span>
                  </div>
                  <div class="info-item">
                    <label>Notas:</label>
                    <span>{{notes}}</span>
                  </div>
                </div>
              </div>
            {{/each}}
          </div>
        </section>
      `
    },
    {
      id: 'internal-rooms',
      name: 'Cômodos Internos',
      type: 'content',
      required: true,
      order: 5,
      template: `
        <section class="internal-rooms">
          <h2>Cômodos Internos</h2>
          {{#each internalRooms}}
            <div class="room-card">
              <h3>{{name}}</h3>
              <div class="info-grid">
                <div class="info-item">
                  <label>Dimensões:</label>
                  <span>{{dimensions}}</span>
                </div>
                <div class="info-item">
                  <label>Condição do Piso:</label>
                  <span>{{floorCondition}}</span>
                </div>
                <div class="info-item">
                  <label>Condição das Paredes:</label>
                  <span>{{wallCondition}}</span>
                </div>
                <div class="info-item">
                  <label>Condição do Teto:</label>
                  <span>{{ceilingCondition}}</span>
                </div>
                <div class="info-item">
                  <label>Observações:</label>
                  <span>{{observations}}</span>
                </div>
              </div>
              <div class="photos-grid">
                {{#each photos}}
                  <div class="photo-item">
                    <img src="{{url}}" alt="{{caption}}" />
                    <span class="caption">{{caption}}</span>
                  </div>
                {{/each}}
              </div>
            </div>
          {{/each}}
        </section>
      `
    },
    {
      id: 'utilities',
      name: 'Medidores',
      type: 'utilities',
      required: true,
      order: 6,
      template: `
        <section class="utilities">
          <h2>Leitura dos Medidores</h2>
          
          <div class="utility-card">
            <h3>Energia Elétrica</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Número do Medidor:</label>
                <span>{{utilities.electricity.meterNumber}}</span>
              </div>
              <div class="info-item">
                <label>Leitura Atual:</label>
                <span>{{utilities.electricity.currentReading}} {{utilities.electricity.unit}}</span>
              </div>
              <div class="info-item">
                <label>Estado:</label>
                <span>{{utilities.electricity.condition}}</span>
              </div>
            </div>
            <div class="photos-grid">
              {{#each utilities.electricity.photos}}
                <div class="photo-item">
                  <img src="{{url}}" alt="{{caption}}" />
                  <span class="caption">{{caption}}</span>
                </div>
              {{/each}}
            </div>
          </div>

          <div class="utility-card">
            <h3>Água</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Número do Medidor:</label>
                <span>{{utilities.water.meterNumber}}</span>
              </div>
              <div class="info-item">
                <label>Leitura Atual:</label>
                <span>{{utilities.water.currentReading}} {{utilities.water.unit}}</span>
              </div>
              <div class="info-item">
                <label>Estado:</label>
                <span>{{utilities.water.condition}}</span>
              </div>
            </div>
            <div class="photos-grid">
              {{#each utilities.water.photos}}
                <div class="photo-item">
                  <img src="{{url}}" alt="{{caption}}" />
                  <span class="caption">{{caption}}</span>
                </div>
              {{/each}}
            </div>
          </div>

          {{#if utilities.gas}}
          <div class="utility-card">
            <h3>Gás</h3>
            <div class="info-grid">
              <div class="info-item">
                <label>Número do Medidor:</label>
                <span>{{utilities.gas.meterNumber}}</span>
              </div>
              <div class="info-item">
                <label>Leitura Atual:</label>
                <span>{{utilities.gas.currentReading}} {{utilities.gas.unit}}</span>
              </div>
              <div class="info-item">
                <label>Estado:</label>
                <span>{{utilities.gas.condition}}</span>
              </div>
            </div>
            <div class="photos-grid">
              {{#each utilities.gas.photos}}
                <div class="photo-item">
                  <img src="{{url}}" alt="{{caption}}" />
                  <span class="caption">{{caption}}</span>
                </div>
              {{/each}}
            </div>
          </div>
          {{/if}}
        </section>
      `
    },
    {
      id: 'keys',
      name: 'Chaves',
      type: 'keys',
      required: true,
      order: 7,
      template: `
        <section class="keys">
          <h2>Inventário de Chaves</h2>
          <div class="keys-grid">
            {{#each keys.keys}}
              <div class="key-card">
                <h3>{{name}}</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <label>Localização:</label>
                    <span>{{location}}</span>
                  </div>
                  <div class="info-item">
                    <label>Status:</label>
                    <span>{{status}}</span>
                  </div>
                  <div class="info-item">
                    <label>Descrição:</label>
                    <span>{{description}}</span>
                  </div>
                </div>
              </div>
            {{/each}}
          </div>
          {{#if keys.handoverDate}}
          <div class="handover-info">
            <p>Data de Entrega: {{keys.handoverDate}}</p>
            <p>Recebido por: {{keys.receivedBy}}</p>
          </div>
          {{/if}}
        </section>
      `
    },
    {
      id: 'technical-opinion',
      name: 'Parecer Técnico',
      type: 'content',
      required: true,
      order: 8,
      template: `
        <section class="technical-opinion">
          <h2>Parecer Técnico</h2>
          <div class="content">
            {{technicalOpinion}}
          </div>
          {{#if recommendations}}
          <div class="recommendations">
            <h3>Recomendações</h3>
            <ul>
              {{#each recommendations}}
                <li>{{this}}</li>
              {{/each}}
            </ul>
          </div>
          {{/if}}
        </section>
      `
    },
    {
      id: 'footer',
      name: 'Rodapé',
      type: 'footer',
      required: true,
      order: 9,
      template: `
        <div class="footer">
          <div class="inspector-info">
            <p>{{inspector.name}}</p>
            <p>{{inspector.license}}</p>
            <div class="signature">
              <img src="{{inspector.signature}}" alt="Assinatura do Vistoriador" />
            </div>
          </div>
          <div class="company-info">
            <p>{{inspector.company}}</p>
            <p>Relatório gerado em {{metadata.createdAt}}</p>
            <p>Versão {{metadata.version}}</p>
          </div>
        </div>
      `
    }
  ],
  styling: {
    fonts: {
      title: 'Helvetica',
      body: 'Arial'
    },
    colors: {
      primary: '#DDA76A',
      secondary: '#2D3748',
      accent: '#4A5568'
    },
    logo: {
      url: '/logo.png',
      position: 'left'
    }
  },
  metadata: {
    version: '1.0.0',
    createdAt: new Date(),
    updatedAt: new Date(),
    author: 'GeoHome'
  }
};