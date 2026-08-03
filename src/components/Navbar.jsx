import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="liquid-glass" style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Pix Lore Logo" style={styles.logoImg} />
        <div style={styles.logo}>
          Pix Lore
        </div>
      </div>
      
      <div style={styles.links}>
        <a href="#work" className="link-text" style={styles.link}>Work</a>
        <a href="#packages" className="link-text" style={styles.link}>Packages</a>
        <a href="#faq" className="link-text" style={styles.link}>FAQ</a>
        <a href="#contact" className="link-text" style={styles.link}>Contact</a>
        <button onClick={toggleTheme} style={styles.themeToggle} aria-label="Toggle theme">
          <div style={{...styles.iconWrapper, transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0)'}}>
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

      <div style={styles.cta}>
        <a href="#contact" className="pill-button">
          Get in touch
        </a>
      </div>
    </nav>
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
    zIndex: 100,
    transition: 'padding 0.3s ease, backdrop-filter 0.3s ease, background 0.3s ease',
  },
  navScrolled: {
    padding: '0.75rem 2rem',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  },
  logoContainer: {
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
