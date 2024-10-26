import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, UserPlus, LogIn } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <Shield className="mx-auto h-20 w-20 text-cyan-400 animate-pulse" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            HackMan Solution
          </h1>
          <p className="text-xl text-gray-300">
            Secure your digital presence with next-gen facial recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Link
            to="/register"
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
          >
            <div className="bg-gray-900 rounded-lg p-6 h-full">
              <UserPlus className="h-12 w-12 mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-semibold mb-2">New User</h2>
              <p className="text-gray-400">
                Join our secure platform with advanced facial recognition
              </p>
            </div>
          </Link>

          <Link
            to="/login"
            className="group relative bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
          >
            <div className="bg-gray-900 rounded-lg p-6 h-full">
              <LogIn className="h-12 w-12 mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-semibold mb-2">Existing User</h2>
              <p className="text-gray-400">
                Welcome back! Log in with your face
              </p>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/security"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Learn about our security features →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;