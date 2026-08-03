import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div style={styles.brand}>
          <div style={styles.logoRow}>
            <img src="/logo.png" alt="Pix Lore Logo" style={styles.logoImg} />
            <h2 style={styles.logo}>Pix Lore</h2>
          </div>
          <p style={styles.tagline}>AI Content Creation Studio</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Pix Lore. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '6rem',
    paddingTop: '3rem',
    borderTop: '1px solid var(--card-border)',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '2rem',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoImg: {
    height: '32px',
    width: 'auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '-0.02em',
    marginBottom: '0.25rem',
  },
  tagline: {
    color: 'var(--text-secondary)',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialLink: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontWeight: '500',
  },
  bottom: {
    textAlign: 'center',
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
  }
};

export default Footer;
