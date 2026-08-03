import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const packages = [
  { id: 'b1', name: 'Per Product Image', price: 500, desc: 'High-resolution lifestyle image of your product in any setting.', type: 'quantity' },
  { id: 'b2', name: 'Per Product Video', price: 6000, desc: 'Dynamic video asset featuring your product.', type: 'quantity' },
  { id: 'b3', name: 'Custom AI Model', price: 3000, desc: 'A unique AI human or product model created for your brand.', type: 'single' },
  { id: 'b4', name: 'Model + Video Bundle', price: 8000, desc: 'Includes Custom Model & Video (Save Rs 1,000).', type: 'single', highlight: true },
  { id: 'b5', name: '20-Image Pack', price: 9000, desc: 'Rs 450 per image (Bulk discount).', type: 'quantity' },
];

const BusinessPricing = ({ cart, addToCart, updateQuantity }) => {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="scroll-reveal">
      <h2 style={styles.heading}>Business/Product Packages</h2>
      <div style={styles.grid}>
        
        {packages.map((pkg, i) => {
          const cartItem = cart[pkg.id];
          const isSelected = !!cartItem;
          
          return (
            <div 
              key={pkg.id} 
              className={`liquid-glass hover-lift ${isSelected ? 'selected-card' : ''}`} 
              style={{
                ...styles.card, 
                ...(pkg.highlight && !isSelected ? styles.highlightCard : {}),
                borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--glass-border)',
                boxShadow: isSelected ? '0 0 0 2px var(--accent-cyan), var(--glass-shadow)' : 'var(--glass-shadow)',
                transitionDelay: `${i * 50}ms`
              }}
            >
              <h3 style={styles.title}>{pkg.name}</h3>
              <div style={styles.price}>Rs {pkg.price.toLocaleString()}</div>
              <p style={styles.desc}>{pkg.desc}</p>
              
              <div style={styles.action}>
                {!isSelected ? (
                  <button onClick={() => addToCart(pkg)} className="pill-button" style={styles.addBtn}>
                    Add to order
                  </button>
                ) : pkg.type === 'quantity' ? (
                  <div style={styles.stepper}>
                    <button onClick={() => updateQuantity(pkg.id, -1)} style={styles.stepBtn}>-</button>
                    <span style={styles.qty}>{cartItem.quantity}</span>
                    <button onClick={() => updateQuantity(pkg.id, 1)} style={styles.stepBtn}>+</button>
                  </div>
                ) : (
                  <button onClick={() => updateQuantity(pkg.id, -1)} className="pill-button" style={styles.removeBtn}>
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

const styles = {
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center',
    padding: '2.5rem 1.5rem',
    position: 'relative',
  },
  highlightCard: {
    background: 'linear-gradient(135deg, rgba(242, 200, 121, 0.2), rgba(255, 150, 100, 0.2))',
  },
  title: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  price: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    fontFamily: 'var(--font-heading)',
  },
  desc: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    marginBottom: '2rem',
    flexGrow: 1,
  },
  action: {
    marginTop: 'auto',
  },
  addBtn: {
    width: '100%',
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
  },
  removeBtn: {
    width: '100%',
    backgroundColor: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--text-primary)',
  },
  stepper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'var(--bg-color)',
    borderRadius: 'var(--radius-full)',
    padding: '0.25rem',
    border: '1px solid var(--glass-border)',
  },
  stepBtn: {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    fontSize: '1.25rem',
    transition: 'transform 0.1s',
  },
  qty: {
    fontWeight: '600',
    fontSize: '1.125rem',
  }
};

export default BusinessPricing;
