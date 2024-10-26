import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate face capture
      const faceData = 'simulated-face-data';
      await login(email, faceData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-md w-full space-y-8">
        <div className="text-center">
          <LogIn className="mx-auto h-12 w-12 text-purple-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-400">Log in with facial recognition</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="input-field mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {showCamera ? (
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-12 w-12 text-gray-500" />
                <p className="text-gray-500 mt-4">Camera simulation</p>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="btn-secondary w-full"
              onClick={() => setShowCamera(true)}
            >
              Start Face Recognition
            </button>
          )}

          {showCamera && (
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify & Login'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;