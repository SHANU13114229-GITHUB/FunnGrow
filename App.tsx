
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import TeenPage from './pages/TeenPage';
import CompanyPage from './pages/CompanyPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/teens" element={<TeenPage />} />
          <Route path="/companies" element={<CompanyPage />} />
          <Route path="*" element={<Navigate to="/teens" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
