import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DonorsPage from './pages/DonorsPage';
import EmergencyPage from './pages/EmergencyPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/donors" element={<DonorsPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}