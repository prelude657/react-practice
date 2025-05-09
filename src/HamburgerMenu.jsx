// components/HamburgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css'; // We'll add some CSS for styling

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false); // Controls menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  return (
    <div className="hamburger-container">
      <div className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>

      {isOpen && (
        <nav className="hamburger-menu">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
