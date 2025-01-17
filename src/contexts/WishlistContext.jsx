import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const WishlistContext = createContext({});

export const useWishlist = () => useContext(WishlistContext);

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { user } = useAuth();

  // Load wishlist from localStorage when component mounts or user changes
  useEffect(() => {
    if (user) {
      const storedWishlist = localStorage.getItem(`wishlist_${user.uid}`);
      setWishlistItems(storedWishlist ? JSON.parse(storedWishlist) : []);
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (user && wishlistItems.length > 0) {
      localStorage.setItem(`wishlist_${user.uid}`, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, user]);

  const addToWishlist = (productId) => {
    if (!user) {
      document.dispatchEvent(new CustomEvent('openAuthModal'));
      return;
    }

    setWishlistItems(prev => {
      if (!prev.includes(productId)) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(id => id !== productId));
    
    // Clean up localStorage if wishlist becomes empty
    if (user && wishlistItems.length <= 1) {
      localStorage.removeItem(`wishlist_${user.uid}`);
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.includes(productId);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}