import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, LogIn, Menu, X, Disc3 } from 'lucide-react';
import SearchBar from '../ui/SearchBar';
import AuthModal from '../auth/AuthModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuthModal = (type: 'login' | 'register') => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900/95 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left Section - Logo & Search & Auth */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 mr-8">
              <Disc3 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                FunkHub
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={toggleSearch}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={() => openAuthModal('register')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
              <button 
                onClick={() => openAuthModal('login')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <LogIn className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Right Section - Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/" className={`transition-colors hover:text-blue-400 ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/genres" className={`transition-colors hover:text-blue-400 ${location.pathname === '/genres' ? 'text-blue-400' : 'text-gray-300'}`}>
                  Genres
                </Link>
              </li>
              <li>
                <Link to="/popular" className={`transition-colors hover:text-blue-400 ${location.pathname === '/popular' ? 'text-blue-400' : 'text-gray-300'}`}>
                  Most Popular
                </Link>
              </li>
              <li>
                <Link to="/artists" className={`transition-colors hover:text-blue-400 ${location.pathname === '/artists' ? 'text-blue-400' : 'text-gray-300'}`}>
                  Artists
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Search Bar (Conditional) */}
        {showSearch && (
          <div className="py-3 border-t border-blue-800">
            <SearchBar onClose={toggleSearch} />
          </div>
        )}
        
        {/* Mobile Menu (Conditional) */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-800">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className={`block py-2 ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/genres" 
                    className={`block py-2 ${location.pathname === '/genres' ? 'text-blue-400' : 'text-gray-300'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Genres
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/popular" 
                    className={`block py-2 ${location.pathname === '/popular' ? 'text-blue-400' : 'text-gray-300'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Most Popular
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/artists" 
                    className={`block py-2 ${location.pathname === '/artists' ? 'text-blue-400' : 'text-gray-300'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Artists
                  </Link>
                </li>
                <li className="border-t border-blue-800 pt-4 mt-4">
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      toggleSearch();
                    }}
                    className="flex items-center text-gray-300 hover:text-white py-2"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    <span>Search</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAuthModal('login');
                    }}
                    className="flex items-center text-gray-300 hover:text-white py-2"
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    <span>Log In</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAuthModal('register');
                    }}
                    className="flex items-center text-gray-300 hover:text-white py-2"
                  >
                    <User className="h-5 w-5 mr-2" />
                    <span>Register</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      
      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
          type={authType} 
          onClose={() => setShowAuthModal(false)} 
          onSwitchMode={() => setAuthType(authType === 'login' ? 'register' : 'login')}
        />
      )}
    </header>
  );
};

export default Header;