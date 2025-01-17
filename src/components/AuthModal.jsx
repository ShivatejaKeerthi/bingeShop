import React, { useState } from 'react';
import { X, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function AuthModal({ isOpen, onClose, mode = 'signin' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);
  
  const { signIn, signUp } = useAuth();

  if (!isOpen) return null;

  const getErrorMessage = (error) => {
    const errorCode = error.code;
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'The email address is not valid';
      case 'auth/user-disabled':
        return 'This account has been disabled. Please contact support';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Your email or password is incorrect. Please try again';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists. Please sign in instead';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long';
      case 'auth/too-many-requests':
        return 'Access temporarily disabled due to many failed login attempts. Please try again later';
      case 'auth/network-request-failed':
        return 'Unable to connect to the server. Please check your internet connection';
      default:
        return 'Your email or password is incorrect. Please try again';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (currentMode === 'signup') {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      onClose();
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* This element centers the modal */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        {/* Modal panel */}
        <div className="relative inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Modal content */}
          <div className="mt-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                {currentMode === 'signup' ? 'Create Account' : 'Welcome Back'}
              </h3>
              <p className="mt-2 text-gray-600">
                {currentMode === 'signup' 
                  ? 'Join our community of fashion enthusiasts'
                  : 'Sign in to access your account'}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    {currentMode === 'signup' ? 'Creating Account...' : 'Signing In...'}
                  </span>
                ) : (
                  currentMode === 'signup' ? 'Create Account' : 'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {currentMode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentMode(currentMode === 'signup' ? 'signin' : 'signup');
                  setError('');
                }}
                className="mt-4 w-full text-center text-sm text-purple-600 hover:text-purple-500 font-medium"
              >
                {currentMode === 'signup' ? 'Sign in instead' : 'Create an account'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}