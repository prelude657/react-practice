import React from 'react';
import LightSwitch from './LightSwitch';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Kurt's Hot Hotel App</h1>
      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search"
          style={styles.searchInput}
        />
        <div style={styles.switchWrapper}>
          <LightSwitch />
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#141414', // Netflix-style dark header
    padding: '1rem 2rem',
    borderBottom: '2px solid #e50914',
    color: 'white',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#e50914', // Netflix red
    margin: 0,
    textTransform: 'uppercase',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  searchInput: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#333',
    color: 'white',
    outline: 'none',
    margin: "15px 0px 0px 0px",
  },
  switchWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default Header;
