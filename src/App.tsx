import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';

// Layouts
import MarketingLayout from './layouts/MarketingLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

// Marketing Pages
import HomePage from './pages/marketing/HomePage';
import FeaturesPage from './pages/marketing/FeaturesPage';
import PricingPage from './pages/marketing/PricingPage';
import AboutPage from './pages/marketing/AboutPage';
import ContactPage from './pages/marketing/ContactPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Dashboard Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import FailedPayments from './pages/dashboard/FailedPayments';
import Analytics from './pages/dashboard/Analytics';
import Integrations from './pages/dashboard/Integrations';
import Campaigns from './pages/dashboard/Campaigns';
import Settings from './pages/dashboard/Settings';

// Auth Context
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  avatar?: string;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

function App() {
  const [auth, setAuth] = useState<{ isAuthenticated: boolean; user: User | null }>({
    isAuthenticated: false,
    user: null,
  });

  const login = (email: string, _password: string) => {
    // Simulate API call
    setAuth({
      isAuthenticated: true,
      user: {
        id: '1',
        email,
        name: 'Demo User',
        company: 'Acme Inc',
      },
    });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      <Routes>
        {/* Marketing Routes */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/failed-payments" element={<FailedPayments />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/integrations" element={<Integrations />} />
          <Route path="/dashboard/campaigns" element={<Campaigns />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
