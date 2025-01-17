import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sliders, ChevronDown } from 'lucide-react';

export default function CategoryPage({ onAddToCart }) {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.id === categoryId);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 3000 });
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Get all products in this category
  const categoryProducts = products.filter(product => product.categoryId === categoryId);

  // Calculate price range for the category
  const prices = categoryProducts.map(product => product.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  // Apply filters and sorting
  useEffect(() => {
    let result = [...categoryProducts];

    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // In a real app, you'd sort by date
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default: // 'featured'
        // Keep original order
        break;
    }

    setFilteredProducts(result);
  }, [categoryId, priceRange, sortBy]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg max-w-2xl mx-auto">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="w-24 px-2 py-1 border rounded-lg"
                      min={minPrice}
                      max={priceRange.max}
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="w-24 px-2 py-1 border rounded-lg"
                      min={priceRange.min}
                      max={maxPrice}
                    />
                  </div>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Sort By - Desktop */}
              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <div className="space-y-2">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'newest', label: 'Newest Arrivals' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        checked={sortBy === option.value}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5" />
                <span>Filters & Sort</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="mt-4 bg-white rounded-xl shadow-sm p-6">
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                        className="w-24 px-2 py-1 border rounded-lg"
                        min={minPrice}
                        max={priceRange.max}
                      />
                      <span>to</span>
                      <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                        className="w-24 px-2 py-1 border rounded-lg"
                        min={priceRange.min}
                        max={maxPrice}
                      />
                    </div>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Sort By - Mobile */}
                <div>
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'featured', label: 'Featured' },
                      { value: 'newest', label: 'Newest Arrivals' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="sort-mobile"
                          value={option.value}
                          checked={sortBy === option.value}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            {/* No Results Message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products match your filters.</p>
                <button
                  onClick={() => {
                    setPriceRange({ min: minPrice, max: maxPrice });
                    setSortBy('featured');
                  }}
                  className="mt-4 text-purple-600 hover:text-purple-700"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}