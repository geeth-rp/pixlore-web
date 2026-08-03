import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BentoShowcase = () => {
  const ref1 = useScrollReveal({ threshold: 0.1 });
  const ref2 = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="work" className="grid-2-col">
      {/* FASHION SHOWCASE CARD */}
      <div ref={ref1} className="flat-card scroll-reveal hover-lift" style={{ ...styles.card, background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.15), rgba(30, 20, 100, 0.05))' }}>
        <div className="pill-label" style={styles.label}>Fashion</div>
        <h2 style={styles.title}>AI Models & Lookbooks</h2>
        <p style={styles.desc}>Showcase your latest collection on diverse, realistic AI models without the logistics of a physical shoot.</p>
        <a href="#packages" className="circular-btn" style={styles.iconBtn}>→</a>
      </div>

      {/* BUSINESS SHOWCASE CARD */}
      <div ref={ref2} className="flat-card scroll-reveal hover-lift" style={{ ...styles.card, background: 'linear-gradient(135deg, rgba(95, 212, 232, 0.15), rgba(10, 100, 120, 0.05))', transitionDelay: '100ms' }}>
        <div className="pill-label" style={styles.label}>Business</div>
        <h2 style={styles.title}>Product & Brand Lifestyle</h2>
        <p style={styles.desc}>Place your products in stunning, photorealistic lifestyle environments instantly.</p>
        <a href="#packages" className="circular-btn" style={styles.iconBtn}>→</a>
      </div>
    </section>
  );
};

const styles = {
  card: {
    position: 'relative',
    padding: '3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '320px',
  },
  label: {
    marginBottom: 'auto',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    marginTop: '3rem',
  },
  desc: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    maxWidth: '80%',
  },
  iconBtn: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    color: 'var(--text-primary)',
    backgroundColor: 'var(--bg-color)',
    textDecoration: 'none',
  }
};

export default BentoShowcase;
