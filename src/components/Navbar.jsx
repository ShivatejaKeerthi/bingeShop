import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu as MenuIcon, User, X, Package, Heart, CreditCard, Settings, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import SearchModal from './SearchModal';

export default function Navbar({ cartItemCount, onCartClick }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthModal = () => setIsAuthModalOpen(true);
    document.addEventListener('openAuthModal', handleAuthModal);
    return () => document.removeEventListener('openAuthModal', handleAuthModal);
  }, []);

  const profileMenuItems = [
    { label: 'Profile', icon: User, href: '/profile' },
    { label: 'Orders', icon: Package, href: '/profile/orders' },
    { label: 'Wishlist', icon: Heart, href: '/profile/wishlist' },
    { label: 'Payment Methods', icon: CreditCard, href: '/profile/payment' },
    { label: 'Settings', icon: Settings, href: '/profile/settings' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsProfileMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-purple-600">bingeShop</Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="w-full flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Search className="h-5 w-5" />
                <span className="text-sm">Search for products...</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative cursor-pointer" onClick={onCartClick}>
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </div>
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    <User className="h-6 w-6" />
                    <span className="ml-2 text-sm hidden md:inline">{user.email}</span>
                  </button>

                  {/* Profile Dropdown Menu */}
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                      {profileMenuItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 mr-3" />
                          {item.label}
                        </Link>
                      ))}
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center text-gray-600 hover:text-purple-600"
                >
                  <User className="h-6 w-6" />
                  <span className="ml-2 text-sm hidden md:inline">Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
}