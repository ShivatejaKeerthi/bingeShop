import React, { useState } from 'react';
import { Plus, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { useWishlist } from '../contexts/WishlistContext';

export default function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const category = categories.find(cat => cat.id === product.categoryId);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          <img 
            src={product.image} 
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out
              ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur-sm">
              {category.name}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              className={`p-3 rounded-full bg-white shadow-lg transform transition-all duration-300
                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                hover:bg-purple-600 hover:text-white`}
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={handleWishlistClick}
              className={`p-3 rounded-full bg-white shadow-lg transform transition-all duration-300
                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                ${inWishlist ? 'text-red-500 hover:bg-red-50' : 'hover:bg-purple-600 hover:text-white'}`}
            >
              <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(4.5)</span>
        </div>

        {/* Product Info */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 hover:text-purple-600">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-bold text-purple-600">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="text-sm text-gray-900 font-medium hover:text-purple-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}