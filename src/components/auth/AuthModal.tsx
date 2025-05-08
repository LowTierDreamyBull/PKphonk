import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  type: 'login' | 'register';
  onClose: () => void;
  onSwitchMode: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ type, onClose, onSwitchMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted', { email, password, username });
    // Implement actual auth logic here
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="w-full max-w-md bg-blue-900 rounded-lg shadow-xl overflow-hidden animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b border-blue-800">
          <h2 className="text-xl font-semibold text-white">
            {type === 'login' ? 'Log In' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {type === 'register' && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 bg-blue-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                  required
                />
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-blue-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-blue-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                required
              />
            </div>
            
            {type === 'login' && (
              <div className="text-right">
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </a>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              {type === 'login' ? 'Log In' : 'Create Account'}
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-300">
              {type === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={onSwitchMode}
                className="ml-1 text-blue-400 hover:text-blue-300"
              >
                {type === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;