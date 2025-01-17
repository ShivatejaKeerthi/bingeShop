import React, { useState, useEffect } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Search panel */}
        <div className="fixed inset-x-0 top-0 bg-white shadow-lg transform transition-transform">
          <div className="max-w-7xl mx-auto">
            {/* Search header */}
            <div className="flex items-center p-4 border-b">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
                className="flex-1 px-4 py-2 focus:outline-none text-lg"
                autoFocus
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search results */}
            <div className="max-h-[70vh] overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="divide-y">
                  {searchResults.map(product => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={onClose}
                      className="flex items-center p-4 hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {product.description}
                        </p>
                        <p className="text-purple-600 font-medium mt-1">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </Link>
                  ))}
                </div>
              ) : searchTerm ? (
                <div className="p-8 text-center text-gray-500">
                  No products found matching "{searchTerm}"
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  Start typing to search for products
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}