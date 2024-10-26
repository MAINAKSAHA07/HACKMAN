import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Shield, UserPlus, LogIn } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DevelopedBy from './pages/DevelopedBy';
import SecurityAwareness from './pages/SecurityAwareness';
import ImageCapture from './pages/ImageCapture';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/image-capture" element={<ImageCapture />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/developed-by" element={<DevelopedBy />} />
            <Route path="/security" element={<SecurityAwareness />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;