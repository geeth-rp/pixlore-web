import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  const heroRef = useScrollReveal();

  return (
    <section ref={heroRef} className="hero-grid scroll-reveal" style={styles.heroContainer}>
      <div style={styles.leftColumn}>
        <h1 style={styles.headline}>
          AI-made content that empowers fashion and business brands
          <span style={styles.inlineChip}>
            <span style={styles.playIcon}>▶</span>
            See our work
          </span>
        </h1>
        <p style={styles.subhead}>
          Get agency-quality lifestyle, product, and fashion content without the studio costs, models, or long timelines.
        </p>
        <div style={styles.actions}>
          <a href="#contact" className="pill-button" style={styles.primaryCta}>
            Get in touch
          </a>
          <a href="#packages" className="link-text" style={styles.secondaryCta}>
            See packages
          </a>
        </div>
      </div>
      
      <div style={styles.rightColumn}>
        <div style={styles.infoCard}>
          <h3 style={styles.cardTitle}>Ready to create without the studio cost?</h3>
          <p style={styles.cardText}>High-quality, AI-generated content tailored to your brand.</p>
          <a href="#packages" className="circular-btn" style={styles.arrowBtn}>
            →
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    marginBottom: '6rem',
  },
  leftColumn: {
    maxWidth: '100%',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: '600',
    letterSpacing: '-0.03em',
    marginBottom: '1.5rem',
    color: 'var(--text-primary)',
    lineHeight: '1.1',
    display: 'inline-block',
  },
  inlineChip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--bg-color)',
    padding: '0.25rem 1rem 0.25rem 0.5rem',
    borderRadius: 'var(--radius-full)',
    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
    fontWeight: '500',
    verticalAlign: 'middle',
    marginLeft: '1rem',
    boxShadow: 'var(--card-shadow)',
    color: 'var(--text-primary)',
  },
  playIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    fontSize: '0.8rem',
  },
  subhead: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    maxWidth: '600px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  primaryCta: {
    padding: '1rem 2rem',
    fontSize: '1.125rem',
  },
  secondaryCta: {
    fontSize: '1.125rem',
    color: 'var(--text-primary)',
  },
  rightColumn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  infoCard: {
    background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.8), rgba(95, 212, 232, 0.8))',
    color: '#fff',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    maxWidth: '400px',
    padding: '3rem 2.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#fff',
  },
  cardText: {
    fontSize: '1.125rem',
    opacity: 0.9,
    marginBottom: '4rem',
  },
  arrowBtn: {
    position: 'absolute',
    bottom: '2.5rem',
    right: '2.5rem',
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textDecoration: 'none',
    fontSize: '1.5rem',
  }
};

// Responsive adjustments using a styled approach would typically require CSS classes,
// but for the grid layout we can handle it in index.css if needed, or rely on flex-wrap.
// We'll add a quick media query to index.css for the hero grid.

export default Hero;
