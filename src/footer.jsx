import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.linkContainer}>
        <a href="/about" style={styles.link}>About Us</a>
        <a href="/contact" style={styles.link}>Contact</a>
        <a href="/privacy" style={styles.link}>Privacy Policy</a>
        <a href="/terms" style={styles.link}>Terms of Service</a>
        <a href="/faq" style={styles.link}>FAQ</a>
      </div>
      <p style={styles.copy}>&copy; {new Date().getFullYear()} Kurtis Travel Partners. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(to right, #ff3366, #33ccff)', // Gradient for added color
    padding: '1.5rem 0',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
    marginTop: '2rem',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  copy: {
    color: '#777',
    fontSize: '0.85rem',
  },
};

export default Footer;
