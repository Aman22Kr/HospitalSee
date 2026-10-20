import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HospitalProvider } from './context/HospitalContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { EmergencyModal } from './components/layout/EmergencyModal';
import { QuickBookModal } from './components/layout/QuickBookModal';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { HealthPackagesPage } from './pages/HealthPackagesPage';
import { CashlessTpaPage } from './pages/CashlessTpaPage';
import { PatientGuidePage } from './pages/PatientGuidePage';
import { AppointmentBookingPage } from './pages/AppointmentBookingPage';
import { MyAppointmentsPage } from './pages/MyAppointmentsPage';
import { ContactEmergencyPage } from './pages/ContactEmergencyPage';
import { BlogFaqPage } from './pages/BlogFaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <HospitalProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#fffdfa] text-stone-800 antialiased selection:bg-orange-500 selection:text-white">
          {/* Main Hospital Navigation Header */}
          <Header />

          {/* Dynamic Content Routing */}
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/departments/:id" element={<DepartmentDetailPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/doctors/:id" element={<DoctorDetailPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/health-packages" element={<HealthPackagesPage />} />
              <Route path="/cashless-tpa" element={<CashlessTpaPage />} />
              <Route path="/patient-guide" element={<PatientGuidePage />} />
              <Route path="/appointments" element={<AppointmentBookingPage />} />
              <Route path="/my-appointments" element={<MyAppointmentsPage />} />
              <Route path="/contact" element={<ContactEmergencyPage />} />
              <Route path="/blog-faq" element={<BlogFaqPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Comprehensive Medical Footer */}
          <Footer />

          {/* Global Interactive Modals */}
          <SearchModal />
          <EmergencyModal />
          <QuickBookModal />
        </div>
      </HashRouter>
    </HospitalProvider>
  );
}
