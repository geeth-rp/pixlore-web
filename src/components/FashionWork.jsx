import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TiltedCarousel from './TiltedCarousel';
import fashionModel1 from '../assets/fashion-model-1.jpg';
import fashionModel2 from '../assets/fashion-model-2.jpg';
import fashionImg1 from '../assets/Fashion-1.jpg';
import fashionImg2 from '../assets/Fashion-2.jpg';
import fashionImg3 from '../assets/Fashion-3.jpg';
import fashionVideo from '../assets/fashion-brand-video.mp4';

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
    {/* FASHION CAROUSEL ITEM 1 — 9:16 */},
    <img key="img1" src={fashionImg1} alt="Fashion 1" className="aspect-portrait media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* FASHION CAROUSEL ITEM 2 — 9:16 */},
    <img key="img2" src={fashionImg2} alt="Fashion 2" className="aspect-portrait media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* FASHION CAROUSEL ITEM 3 — 9:16 */},
    <img key="img3" src={fashionImg3} alt="Fashion 3" className="aspect-portrait media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* FASHION CAROUSEL ITEM 4 — 9:16 Video */},
    <video key="vid1" src={fashionVideo} className="aspect-portrait media-item" autoPlay muted loop playsInline preload="metadata" onContextMenu={(e) => e.preventDefault()} draggable={false} />,

    {/* FASHION CAROUSEL ITEM 5 — 16:9 Picture */},
    <img key="model1" src={fashionModel1} alt="Fashion Model 1" className="aspect-landscape media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />,
    
    {/* FASHION CAROUSEL ITEM 6 — 16:9 Picture */},
    <img key="model2" src={fashionModel2} alt="Fashion Model 2" className="aspect-landscape media-item" loading="lazy" onContextMenu={(e) => e.preventDefault()} draggable={false} />
  ].filter(item => React.isValidElement(item));

  return (
    <section ref={ref} className="scroll-reveal">
      <h2 style={{...styles.heading, textAlign: 'center', fontWeight: 'bold'}}>Fashion</h2>
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
