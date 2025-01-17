import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Hero from './components/Hero';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import { categories, products } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => {
      const newItems = prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(item => item !== null);
      return newItems;
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar 
          cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map(category => (
                      <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-6">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                            <p className="text-white/80 text-sm">{category.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            } />
            <Route 
              path="/category/:categoryId" 
              element={<CategoryPage onAddToCart={addToCart} />} 
            />
            <Route 
              path="/product/:productId" 
              element={<ProductPage onAddToCart={addToCart} />} 
            />
            <Route path="/profile/*" element={<ProfilePage />} />
          </Routes>
        </main>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </Router>
  );
}

export default App;