import React, { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Package, Heart, CreditCard, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProfilePage() {
  const { user } = useAuth();
  const location = useLocation();
  const { wishlistItems } = useWishlist();
  
  // Create refs for each section
  const profileRef = useRef(null);
  const ordersRef = useRef(null);
  const wishlistRef = useRef(null);
  const paymentRef = useRef(null);
  const settingsRef = useRef(null);

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User, ref: profileRef },
    { id: 'orders', label: 'Orders', icon: Package, ref: ordersRef },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, ref: wishlistRef },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard, ref: paymentRef },
    { id: 'settings', label: 'Settings', icon: Settings, ref: settingsRef }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Get wishlist products
  const wishlistProducts = products.filter(product => wishlistItems.includes(product.id));

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <User className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{user?.email}</h2>
                  <p className="text-sm text-gray-500">Member since 2024</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.ref)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 w-full transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            {/* Profile Section */}
            <div ref={profileRef} className="bg-white rounded-2xl shadow-sm p-6 scroll-mt-24">
              <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    disabled
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Address
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Enter your shipping address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Orders Section */}
            <div ref={ordersRef} className="bg-white rounded-2xl shadow-sm p-6 scroll-mt-24">
              <h3 className="text-xl font-semibold mb-6">Orders</h3>
              <div className="text-center text-gray-500 py-8">
                No orders yet
              </div>
            </div>

            {/* Wishlist Section */}
            <div ref={wishlistRef} className="bg-white rounded-2xl shadow-sm p-6 scroll-mt-24">
              <h3 className="text-xl font-semibold mb-6">Wishlist</h3>
              {wishlistProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlistProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Your wishlist is empty
                </div>
              )}
            </div>

            {/* Payment Methods Section */}
            <div ref={paymentRef} className="bg-white rounded-2xl shadow-sm p-6 scroll-mt-24">
              <h3 className="text-xl font-semibold mb-6">Payment Methods</h3>
              <div className="text-center text-gray-500 py-8">
                No payment methods added yet
              </div>
            </div>

            {/* Settings Section */}
            <div ref={settingsRef} className="bg-white rounded-2xl shadow-sm p-6 scroll-mt-24">
              <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Email Notifications</h4>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="ml-2 text-gray-700">Order updates</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="ml-2 text-gray-700">Promotions and deals</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="ml-2 text-gray-700">Account activity</span>
                    </label>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h4 className="font-medium text-gray-900 mb-4">Delete Account</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}