import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhyPixLore = () => {
  const refTitle = useScrollReveal({ threshold: 0.1 });
  const refF1 = useScrollReveal({ threshold: 0.1 });
  const refF2 = useScrollReveal({ threshold: 0.1 });
  const refF3 = useScrollReveal({ threshold: 0.1 });

  return (
    <section style={styles.container}>
      <div ref={refTitle} className="scroll-reveal">
        <div className="pill-label" style={styles.eyebrow}>Why Pix Lore</div>
        <h2 style={styles.headline}>A faster, cheaper way to create</h2>
      </div>
      
      <div className="grid-2-col" style={styles.features}>
        <div ref={refF1} className="scroll-reveal" style={{...styles.featureItem, transitionDelay: '50ms'}}>
          <h3 style={styles.featureTitle}>Cost Effective</h3>
          <p style={styles.featureDesc}>Skip the expensive studio rentals, photographer day rates, and model fees. Get premium quality at a fraction of the cost.</p>
        </div>
        <div ref={refF2} className="scroll-reveal" style={{...styles.featureItem, transitionDelay: '100ms'}}>
          <h3 style={styles.featureTitle}>Unmatched Speed</h3>
          <p style={styles.featureDesc}>No more waiting weeks for editing and retouching. We deliver ready-to-use content in days, not months.</p>
        </div>
        <div ref={refF3} className="scroll-reveal" style={{...styles.featureItem, transitionDelay: '150ms'}}>
          <h3 style={styles.featureTitle}>Ultimate Control</h3>
          <p style={styles.featureDesc}>Change the lighting, background, or model's look instantly. Perfect consistency across your entire brand.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '4rem 0',
    textAlign: 'center',
  },
  eyebrow: {
    marginBottom: '1.5rem',
  },
  headline: {
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    marginBottom: '4rem',
    maxWidth: '800px',
    margin: '0 auto 4rem',
  },
  features: {
    textAlign: 'left',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '3rem',
  },
  featureItem: {
    padding: '1rem',
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  featureDesc: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
  }
};

export default WhyPixLore;
