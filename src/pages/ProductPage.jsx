import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage({ onAddToCart }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const category = categories.find(cat => cat.id === product.categoryId);

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4); // Show only 4 related products

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-purple-600">Home</Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link to={`/category/${category.id}`} className="text-gray-500 hover:text-purple-600">
                {category.name}
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-purple-600">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-500">(4.5)</span>
              </div>
              <p className="text-xl font-bold text-purple-600">${product.price.toFixed(2)}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={handleWishlistClick}
                className={`p-4 rounded-xl border transition-colors flex items-center justify-center space-x-2
                  ${inWishlist 
                    ? 'border-red-200 text-red-500 hover:bg-red-50' 
                    : 'border-gray-200 hover:border-purple-600 hover:text-purple-600'}`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                <span>{inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <span className="text-gray-600">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600">↺</span>
                </div>
                <span className="text-gray-600">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(relatedProduct => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}