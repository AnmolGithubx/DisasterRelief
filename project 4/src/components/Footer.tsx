import React from 'react';
import { Heart, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-400 mr-2" />
              <h3 className="text-lg font-bold">DisasterRelief Connect</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Connecting communities during disasters through technology, compassion, and coordinated response efforts.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
            <ul className="space-y-2">
              <li>
                <a href="#emergency" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Find Emergency Resources
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Request Help
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Volunteer Registration
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Make a Donation
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contacts</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-red-400 mr-2" />
                <span className="text-red-400 font-bold">911 - Emergency Services</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">311 - Non-Emergency</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">(555) DISASTER</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">help@disasterrelief.org</span>
              </li>
              <li className="flex items-center text-sm">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">Emergency Operations Center</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">(555) 123-HELP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DisasterRelief Connect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;