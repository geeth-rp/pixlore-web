import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TiltedCarousel from './TiltedCarousel';

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

const IconUser = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '0.5rem'}}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const FashionWork = () => {
  const ref = useScrollReveal({ threshold: 0.1 });

  const fashionItems = [
    {/* FASHION CAROUSEL ITEM 1 — replace with real image/video */},
    <div key="img1" className="aspect-portrait" style={styles.imageSlot}><IconCamera /> Image 1</div>,
    
    {/* FASHION CAROUSEL ITEM 2 — replace with real image/video */},
    <div key="img2" className="aspect-portrait" style={styles.imageSlot}><IconCamera /> Image 2</div>,
    
    {/* FASHION CAROUSEL ITEM 3 — replace with real image/video */},
    <div key="img3" className="aspect-portrait" style={styles.imageSlot}><IconCamera /> Image 3</div>,
    
    {/* FASHION CAROUSEL ITEM 4 — replace with real image/video */},
    <div key="model1" className="aspect-landscape" style={styles.portraitSlot}><IconUser /> AI Model 1</div>,
    
    {/* FASHION CAROUSEL ITEM 5 — replace with real image/video */},
    <div key="model2" className="aspect-landscape" style={styles.portraitSlot}><IconUser /> AI Model 2</div>,
    
    {/* FASHION CAROUSEL ITEM 6 — replace with real image/video */},
    <div key="vid1" className="aspect-landscape" style={styles.imageSlot}><IconVideo /> Video</div>
  ].filter(item => React.isValidElement(item));

  return (
    <section ref={ref} className="scroll-reveal">
      <h2 style={styles.heading}>Fashion</h2>
      <TiltedCarousel items={fashionItems} />
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

export default FashionWork;
