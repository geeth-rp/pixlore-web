import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// === EDIT THESE CONSTANTS ===
const WHATSAPP_NUMBER = "94714330669"; // Format: 94 followed by your 9-digit number
const GMAIL_ADDRESS = "pixlore.studio@gmail.com";
// ============================

const Contact = () => {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="scroll-reveal">
      <h2 style={styles.sectionHeading}>Contact us</h2>
      
      <div className="liquid-glass hover-lift" style={styles.card}>
        <div style={styles.left}>
          {/* LOGO PHOTO — replace with real logo or image later */}
          <div style={styles.avatarPlaceholder}>
            <img src="/logo.png" alt="Pix Lore Logo" style={styles.contactLogo} />
          </div>
          <h3 style={styles.heading}>Ready to transform your brand content?</h3>
          <p style={styles.desc}>Get in touch today and let's discuss how AI can elevate your visual identity.</p>
        </div>
        
        <div style={styles.right}>
          {/* Replace with actual WhatsApp Business link when provided */}
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="pill-button hover-scale" style={styles.waBtn}>
            Message us on WhatsApp
          </a>
          <a href={`mailto:${GMAIL_ADDRESS}`} className="pill-button hover-scale" style={styles.emailBtn}>
            Email us
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  sectionHeading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  card: {
    background: 'linear-gradient(135deg, rgba(123, 110, 246, 0.4), rgba(95, 212, 232, 0.4))',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4rem',
  },
  left: {
    flex: '1 1 400px',
  },
  avatarPlaceholder: {
    width: '64px',
    height: '64px',
    borderRadius: 'var(--radius-full)',
    backgroundColor: 'var(--panel-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    overflow: 'hidden',
  },
  contactLogo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  desc: {
    fontSize: '1.25rem',
    opacity: 0.9,
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    flex: '0 1 auto',
  },
  waBtn: {
    backgroundColor: '#25D366', // WhatsApp Brand Color
    color: '#fff',
    fontSize: '1.125rem',
    width: '100%',
  },
  emailBtn: {
    backgroundColor: 'var(--text-primary)',
    color: 'var(--bg-color)',
    fontSize: '1.125rem',
    width: '100%',
  }
};

export default Contact;
