import React, { useState, useEffect } from 'react';
import logoUrl from '../assets/logo.png';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="liquid-glass" style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.logoContainer}>
          <img src={logoUrl} alt="Pix Lore Logo" style={styles.logoImg} />
          <div style={styles.logo}>
            Pix Lore
          </div>
        </div>

        <div className="desktop-menu">
          <a href="#work" className="link-text" style={styles.link}>Work</a>
          <a href="#packages" className="link-text" style={styles.link}>Packages</a>
          <a href="#faq" className="link-text" style={styles.link}>FAQ</a>
          <a href="#contact" className="link-text" style={styles.link}>Contact</a>
          <button onClick={toggleTheme} style={styles.themeToggle} aria-label="Toggle theme">
            <div style={{ ...styles.iconWrapper, transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0)' }}>
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </div>
          </button>
        </div>

        <div className="desktop-cta">
          <a href="#contact" className="pill-button">
            Get in touch
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#work" className="link-text" style={styles.link} onClick={closeMenu}>Work</a>
        <a href="#packages" className="link-text" style={styles.link} onClick={closeMenu}>Packages</a>
        <a href="#faq" className="link-text" style={styles.link} onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="link-text" style={styles.link} onClick={closeMenu}>Contact</a>
        <button className="themeToggle" onClick={() => { toggleTheme(); closeMenu(); }} style={styles.themeToggle} aria-label="Toggle theme">
          <div style={{ ...styles.iconWrapper, transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0)' }}>
            {theme === 'light' ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </div>
        </button>
      </div>
    </>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2rem',
    marginBottom: '4rem',
    position: 'sticky',
    top: '1rem',
    zIndex: 300,
    transition: 'padding 0.3s ease, backdrop-filter 0.3s ease, background 0.3s ease',
  },
  navScrolled: {
    padding: '0.75rem 2rem',
    backdropFilter: 'saturate(180%) blur(24px)',
    WebkitBackdropFilter: 'saturate(180%) blur(24px)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoImg: {
    height: '32px',
    width: 'auto',
    borderRadius: '8px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '-0.02em',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
  },
  themeToggle: {
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    overflow: 'hidden',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.5s ease',
  },
  cta: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
};

export default Navbar;
