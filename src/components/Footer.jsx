import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-6 w-6 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">bingeShop</span>
            </div>
            <p className="text-sm mb-4">
              Your one-stop destination for premium fashion, electronics, and jewelry.
              Shop the latest trends with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/womens-fashion" className="hover:text-purple-500 transition-colors">Women's Fashion</Link>
              </li>
              <li>
                <Link to="/category/mens-fashion" className="hover:text-purple-500 transition-colors">Men's Fashion</Link>
              </li>
              <li>
                <Link to="/category/electronics" className="hover:text-purple-500 transition-colors">Electronics</Link>
              </li>
              <li>
                <Link to="/category/jewelry" className="hover:text-purple-500 transition-colors">Jewelry</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-purple-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-purple-500 transition-colors">Shipping Information</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-purple-500 transition-colors">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-purple-500 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-purple-500" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-500" />
                <span>support@bingeshop.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2024 bingeShop. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-purple-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-purple-500 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-purple-500 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}