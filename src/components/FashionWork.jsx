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

const IconUser = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '0.5rem'}}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const FashionWork = () => {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="scroll-reveal">
      <h2 style={styles.heading}>Fashion</h2>
      <div className="gallery-grid">
        {/* ADD YOUR PHOTO HERE: Replace backgroundColor with backgroundImage url() */}
        <div className="aspect-portrait hover-scale" style={styles.imageSlot}><IconCamera /> Image 1</div>
        <div className="aspect-portrait hover-scale" style={styles.imageSlot}><IconCamera /> Image 2</div>
        <div className="aspect-portrait hover-scale" style={styles.imageSlot}><IconCamera /> Image 3</div>
        <div className="aspect-portrait hover-scale" style={styles.imageSlot}><IconCamera /> Image 4</div>
        <div className="aspect-portrait hover-scale" style={styles.imageSlot}><IconCamera /> Image 5</div>
        <div className="aspect-portrait hover-scale" style={styles.imageSlot}><IconCamera /> Image 6</div>
        
        {/* ADD YOUR VIDEO HERE: Can replace this div with a <video> tag */}
        <div className="aspect-landscape hover-scale" style={{...styles.imageSlot, gridColumn: '1 / -1', maxHeight: '400px'}}>
          <IconVideo /> Video
        </div>
        
        {/* ADD AI MODEL IMAGE 1 */}
        <div className="aspect-landscape hover-scale" style={styles.portraitSlot}>
          <IconUser /> AI Model 1
        </div>
        {/* ADD AI MODEL IMAGE 2 */}
        <div className="aspect-landscape hover-scale" style={styles.portraitSlot}>
          <IconUser /> AI Model 2
        </div>
        {/* ADD AI MODEL IMAGE 3 */}
        <div className="aspect-landscape hover-scale" style={styles.portraitSlot}>
          <IconUser /> AI Model 3
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

export default FashionWork;
