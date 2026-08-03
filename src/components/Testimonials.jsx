import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const refTitle = useScrollReveal({ threshold: 0.1 });
  const refT1 = useScrollReveal({ threshold: 0.1 });
  const refT2 = useScrollReveal({ threshold: 0.1 });
  const refT3 = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="reviews">
      <h2 ref={refTitle} className="scroll-reveal" style={styles.heading}>What Our Clients Say</h2>
      <div style={styles.grid}>
        
        {/* TESTIMONIAL 1 */}
        <div ref={refT1} className="flat-card scroll-reveal hover-lift" style={{...styles.card, transitionDelay: '50ms'}}>
          <div style={styles.stars}>★★★★★</div>
          <p style={styles.quote}>"Absolutely blown away by the quality. It saved us thousands on our last campaign."</p>
          <div style={styles.author}>— Client Name</div>
        </div>

        {/* TESTIMONIAL 2 */}
        <div ref={refT2} className="flat-card scroll-reveal hover-lift" style={{...styles.card, transitionDelay: '100ms'}}>
          <div style={styles.stars}>★★★★★</div>
          <p style={styles.quote}>"The custom AI model looks exactly like our brand persona. Incredibly fast turnaround."</p>
          <div style={styles.author}>— Client Name</div>
        </div>

        {/* TESTIMONIAL 3 */}
        <div ref={refT3} className="flat-card scroll-reveal hover-lift" style={{...styles.card, transitionDelay: '150ms'}}>
          <div style={styles.stars}>★★★★★</div>
          <p style={styles.quote}>"We used to wait weeks for product photos. Now we have them in days."</p>
          <div style={styles.author}>— Client Name</div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  stars: {
    color: 'var(--accent-gold)',
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  quote: {
    fontSize: '1.125rem',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  author: {
    fontWeight: '600',
    color: 'var(--text-secondary)',
  }
};

export default Testimonials;
