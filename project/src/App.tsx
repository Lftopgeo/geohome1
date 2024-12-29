import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { NewInspectionPage } from './pages/NewInspectionPage';
import { InspectionAreasPage } from './pages/InspectionAreasPage';
import { InternalRoomsPage } from './pages/InternalRoomsPage';
import { ExternalInspectionPage } from './pages/ExternalInspectionPage';
import { ReportPage } from './pages/ReportPage';
import { MeterAndKeysPage } from './pages/MeterAndKeysPage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="nova-vistoria" element={<NewInspectionPage />} />
          <Route path="areas-vistoria" element={<InspectionAreasPage />} />
          <Route path="ambiente-interno" element={<InternalRoomsPage />} />
          <Route path="ambiente-externo" element={<ExternalInspectionPage />} />
          <Route path="relatorio" element={<ReportPage />} />
          <Route path="chaves-e-medidores" element={<MeterAndKeysPage />} />
        </Route>
      </Routes>
    </Router>
  );
}