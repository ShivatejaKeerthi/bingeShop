import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-white">
      {/* Left decorative circle */}
      <div className="absolute left-0 top-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-100 via-purple-50 to-white -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      
      {/* Right decorative circle */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-pink-100 via-purple-50 to-white translate-x-1/3 translate-y-1/3 blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Section */}
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              New Arrivals 2024
            </div>

            <div>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                Discover
                <br />
                <span className="relative">
                  <span className="relative z-10">Luxury Style</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-200/60 -rotate-1"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Explore our curated collection of premium fashion and accessories. 
                Each piece tells a story of elegance and sophistication.
              </p>
            </div>

            <div>
              <Link 
                to="/category/womens-fashion"
                className="group relative inline-flex px-8 py-4 bg-gray-900 text-white rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Collection
                </span>
                <div className="absolute inset-0 bg-purple-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">50k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=987" 
                alt="Luxury Fashion" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Premium Quality</div>
                  <div className="text-sm text-gray-600">Verified Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}