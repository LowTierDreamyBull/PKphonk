import React from 'react';
import { Link } from 'react-router-dom';
import { Disc3, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 px-4">
      <div className="text-center">
        <Disc3 className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-spin-slow" />
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          The groove you're looking for seems to have moved or doesn't exist. Don't worry, we've got plenty more funk to discover.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg"
        >
          <Home className="h-5 w-5 mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;