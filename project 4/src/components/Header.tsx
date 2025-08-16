import React, { useState } from 'react';
import { Menu, X, Phone, AlertTriangle, Heart, Users } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">DisasterRelief Connect</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#emergency" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Emergency Resources
            </a>
            <a href="#help" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Get Help
            </a>
            <a href="#volunteer" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Volunteer
            </a>
            <a href="#donate" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Donate
            </a>
            <a href="#updates" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Updates
            </a>
          </nav>

          {/* Emergency Hotline */}
          <div className="hidden md:flex items-center">
            <Phone className="h-5 w-5 text-red-600 mr-2" />
            <span className="text-red-600 font-bold">Emergency: 911</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a href="#emergency" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Emergency Resources
            </a>
            <a href="#help" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Get Help
            </a>
            <a href="#volunteer" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Volunteer
            </a>
            <a href="#donate" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Donate
            </a>
            <a href="#updates" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Updates
            </a>
            <div className="flex items-center px-3 py-2 text-red-600 font-bold">
              <Phone className="h-5 w-5 mr-2" />
              Emergency: 911
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;