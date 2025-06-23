import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Wimforce</h3>
                <p className="text-gray-400">Machinery LS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Power You Can Trust. Machines Built to Perform. We specialize in premium construction, 
              agricultural, and warehouse machinery across the Netherlands and Europe.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-500" />
                <span>+31 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-500" />
                <span>info@wimforce.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-500" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/products/excavators" className="text-gray-300 hover:text-white transition-colors">Excavators</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-white transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/knowledge" className="text-gray-300 hover:text-white transition-colors">Knowledge Hub</Link></li>
              <li><Link to="/knowledge/buying-guides" className="text-gray-300 hover:text-white transition-colors">Buying Guides</Link></li>
              <li><Link to="/knowledge/maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance Tips</Link></li>
              <li><Link to="/knowledge/technical-specs" className="text-gray-300 hover:text-white transition-colors">Technical Specs</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Wimforce Machinery LS. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;