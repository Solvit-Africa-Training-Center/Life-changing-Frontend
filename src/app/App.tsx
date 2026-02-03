import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/components/pages/HomePage';
import { AboutPage } from '@/app/components/pages/AboutPage';
import { HowWeWorkPage } from '@/app/components/pages/HowWeWorkPage';
import { StrategicDirectionPage } from '@/app/components/pages/StrategicDirectionPage';
import { ImpactPage } from '@/app/components/pages/ImpactPage';
import { ResourcesPage } from '@/app/components/pages/ResourcesPage';
import { DonatePage } from '@/app/components/pages/DonatePage';
import { GetInvolvedPage } from '@/app/components/pages/GetInvolvedPage';
import { ExplorePage } from '@/app/components/pages/ExplorePage';
import { LoginPage } from '@/app/components/pages/LoginPage';
import { BeneficiaryDashboard } from '@/app/components/pages/BeneficiaryDashboard';
import { DonorDashboard } from '@/app/components/pages/DonorDashboard';
import { AdminDashboard } from '@/app/components/pages/AdminDashboard';
import { Toaster } from '@/app/components/ui/sonner';
import { AuthProvider, useAuth } from '@/app/components/AuthContext';
import { TranslationProvider } from '@/app/components/TranslationContext';

import { ErrorBoundary } from '@/app/components/ErrorBoundary';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { isAuthenticated, user, logout } = useAuth();

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('home');
  };

  const isDashboard = ['beneficiary-dashboard', 'donor-dashboard', 'admin-dashboard'].includes(currentPage);
  const isLoginPage = ['beneficiary-login', 'donor-login', 'admin-login'].includes(currentPage);

  const renderPage = () => {
    if (currentPage === 'beneficiary-login') return <LoginPage role="beneficiary" onNavigate={handleNavigate} />;
    if (currentPage === 'donor-login') return <LoginPage role="donor" onNavigate={handleNavigate} />;
    if (currentPage === 'admin-login') return <LoginPage role="admin" onNavigate={handleNavigate} />;

    if (currentPage === 'beneficiary-dashboard') {
      if (!isAuthenticated || user?.user_type !== 'beneficiary') {
        handleNavigate('beneficiary-login');
        return <LoginPage role="beneficiary" onNavigate={handleNavigate} />;
      }
      return <BeneficiaryDashboard onLogout={handleLogout} userName={user.name} />;
    }
    if (currentPage === 'donor-dashboard') {
      if (!isAuthenticated || user?.user_type !== 'donor') {
        handleNavigate('donor-login');
        return <LoginPage role="donor" onNavigate={handleNavigate} />;
      }
      return <DonorDashboard onLogout={handleLogout} userName={user.name} />;
    }
    if (currentPage === 'admin-dashboard') {
      if (!isAuthenticated || user?.user_type !== 'admin') {
        handleNavigate('admin-login');
        return <LoginPage role="admin" onNavigate={handleNavigate} />;
      }
      return <AdminDashboard onLogout={handleLogout} userName={user.name} />;
    }

    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage />;
      case 'how-we-work': return <HowWeWorkPage />;
      case 'strategic-direction': return <StrategicDirectionPage />;
      case 'impact': return <ImpactPage />;
      case 'resources': return <ResourcesPage />;
      case 'donate': return <DonatePage />;
      case 'get-involved': return <GetInvolvedPage onNavigate={handleNavigate} />;
      case 'explore': return <ExplorePage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  if (isLoginPage || isDashboard) {
    return (
      <>
        {renderPage()}
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1 main-content-padded">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}


export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <TranslationProvider>
            <AppContent />
          </TranslationProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}