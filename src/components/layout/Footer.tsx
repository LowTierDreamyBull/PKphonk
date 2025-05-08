import React from 'react';
import { Link } from 'react-router-dom';
import { Disc3, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Disc3 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                FunkHub
              </span>
            </div>
            <p className="text-sm">
              Your ultimate destination for all things funk, featuring the greatest hits, 
              artists, and the vibrant culture that defines this iconic music genre.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/genres" className="hover:text-blue-400 transition-colors">
                  Genres
                </Link>
              </li>
              <li>
                <Link to="/popular" className="hover:text-blue-400 transition-colors">
                  Most Popular
                </Link>
              </li>
              <li>
                <Link to="/artists" className="hover:text-blue-400 transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Genre Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Genre Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/genres/classic-funk" className="hover:text-blue-400 transition-colors">
                  Classic Funk
                </Link>
              </li>
              <li>
                <Link to="/genres/p-funk" className="hover:text-blue-400 transition-colors">
                  P-Funk
                </Link>
              </li>
              <li>
                <Link to="/genres/funk-rock" className="hover:text-blue-400 transition-colors">
                  Funk Rock
                </Link>
              </li>
              <li>
                <Link to="/genres/neo-funk" className="hover:text-blue-400 transition-colors">
                  Neo Funk
                </Link>
              </li>
              <li>
                <Link to="/genres/jazz-funk" className="hover:text-blue-400 transition-colors">
                  Jazz Funk
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span>info@funkhub.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 text-white">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-blue-900 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-6 text-sm text-center text-gray-500">
          <p>&copy; 2025 FunkHub. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;