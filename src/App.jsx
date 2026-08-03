import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoShowcase from './components/BentoShowcase';
import WhyPixLore from './components/WhyPixLore';
import FashionWork from './components/FashionWork';
import FashionPricing from './components/FashionPricing';
import BusinessWork from './components/BusinessWork';
import BusinessPricing from './components/BusinessPricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderSummaryPanel from './components/OrderSummaryPanel';
import OrderModal from './components/OrderModal';
import BackgroundBlobs from './components/BackgroundBlobs';

function App() {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('pixlore-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('pixlore-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const current = prev[item.id] || { ...item, quantity: 0 };
      return { ...prev, [item.id]: { ...current, quantity: current.quantity + 1 } };
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      const item = prev[id];
      if (!item) return prev;
      const newQuantity = item.quantity + delta;
      if (newQuantity <= 0) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: { ...item, quantity: newQuantity } };
    });
  };

  const cartItems = Object.values(cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app-container">
      <BackgroundBlobs />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        <div className="section-spacing">
          <BentoShowcase />
        </div>
        
        <div className="section-spacing">
          <WhyPixLore />
        </div>
        
        <div className="section-spacing">
          <FashionWork />
        </div>
        
        <div className="section-spacing">
          <FashionPricing cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />
        </div>
        
        <div className="section-spacing">
          <BusinessWork />
        </div>
        
        <div className="section-spacing">
          <BusinessPricing cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />
        </div>
        
        <div className="section-spacing">
          <FAQ />
        </div>
        
        <div className="section-spacing">
          <Contact />
        </div>
      </main>

      <Footer />

      <OrderSummaryPanel 
        totalItems={totalItems} 
        totalPrice={totalPrice} 
        onReview={() => setIsModalOpen(true)} 
      />
      
      {isModalOpen && (
        <OrderModal 
          cartItems={cartItems} 
          totalPrice={totalPrice} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;
