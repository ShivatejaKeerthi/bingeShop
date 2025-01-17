import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Cart({ isOpen, onClose, items, onUpdateQuantity }) {
  const { user } = useAuth();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      // Close cart and open auth modal
      onClose();
      document.dispatchEvent(new CustomEvent('openAuthModal'));
      return;
    }
    // Proceed with checkout
    console.log('Proceeding with checkout...');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={onClose}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingBag className="h-12 w-12 mb-4" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 rounded-full hover:bg-gray-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 rounded-full hover:bg-gray-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              {user ? 'Proceed to Checkout' : 'Sign in to Checkout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}