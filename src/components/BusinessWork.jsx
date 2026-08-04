import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TiltedCarousel from './TiltedCarousel';
import businessImg1 from '../assets/business-1.jpg';
import businessImg2 from '../assets/business-2.jpg';
import businessImg3 from '../assets/business-3.jpg';
import businessBrand1 from '../assets/business-brand-1.jpg';
import businessBrand2 from '../assets/business-brand-2.jpg';
import businessVideo from '../assets/business-brand-video.mp4';

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

  const businessItems = [
    {/* BUSINESS CAROUSEL ITEM 1 — 9:16 */},
    <img key="prod1" src={businessImg1} alt="Business 1" className="aspect-portrait media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* BUSINESS CAROUSEL ITEM 2 — 9:16 */},
    <img key="prod2" src={businessImg2} alt="Business 2" className="aspect-portrait media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* BUSINESS CAROUSEL ITEM 3 — 9:16 */},
    <img key="prod3" src={businessImg3} alt="Business 3" className="aspect-portrait media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* BUSINESS CAROUSEL ITEM 4 — 9:16 Video */},
    <video key="vid1" src={businessVideo} className="aspect-portrait media-item" autoPlay muted loop playsInline preload="metadata" onContextMenu={(e) => e.preventDefault()} draggable={false} />,

    {/* BUSINESS CAROUSEL ITEM 5 — 16:9 Picture */},
    <img key="brand1" src={businessBrand1} alt="Business Brand 1" className="aspect-landscape media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* BUSINESS CAROUSEL ITEM 6 — 16:9 Picture */},
    <img key="brand2" src={businessBrand2} alt="Business Brand 2" className="aspect-landscape media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />
  ].filter(item => React.isValidElement(item));

  return (
    <section ref={ref} className="scroll-reveal">
      <h2 style={{...styles.heading, textAlign: 'center', fontWeight: 'bold'}}>Business & Product</h2>
      <TiltedCarousel items={businessItems} />
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
