import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const IconCamera = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '0.5rem'}}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const IconVideo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '0.5rem'}}>
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const IconPackage = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '0.5rem'}}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const BusinessWork = () => {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="scroll-reveal">
      <h2 style={styles.heading}>Business & Product</h2>
      <div className="gallery-grid">
        {/* ROW 1: 3 Images (16:9) */}
        <div className="aspect-landscape hover-scale" style={styles.imageSlot}><IconCamera /> Product 1</div>
        <div className="aspect-landscape hover-scale" style={styles.imageSlot}><IconCamera /> Product 2</div>
        <div className="aspect-landscape hover-scale" style={styles.imageSlot}><IconCamera /> Product 3</div>
        
        {/* ROW 2: 2 Models (Left/Center) + 1 Video (Right) */}
        <div className="aspect-landscape hover-scale" style={styles.portraitSlot}>
          <IconPackage /> Brand Setting 1
        </div>
        <div className="aspect-landscape hover-scale" style={styles.portraitSlot}>
          <IconPackage /> Brand Setting 2
        </div>

        {/* VIDEO (Right side of row 2) */}
        <div className="aspect-landscape hover-scale" style={styles.imageSlot}>
          <IconVideo /> Video
        </div>
      </div>
    </section>
  );
};

const styles = {
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  imageSlot: {
    backgroundColor: 'var(--card-flat-bg)',
    borderRadius: 'var(--radius-sm)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    border: '1px solid var(--glass-border)',
    padding: '0.25rem',
    textAlign: 'center',
    overflow: 'hidden',
  },
  portraitSlot: {
    backgroundColor: 'var(--card-flat-bg)',
    borderRadius: 'var(--radius-sm)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    border: '1px solid var(--glass-border)',
    padding: '0.25rem',
    textAlign: 'center',
    overflow: 'hidden',
  }
};

export default BusinessWork;
