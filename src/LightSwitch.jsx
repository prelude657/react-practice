import React, { useState, useEffect } from 'react';

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  useEffect(() => {
    // Change background and text color when toggled
    document.body.style.backgroundColor = isLightOn ? 'white' : 'black';
    document.body.style.color = isLightOn ? 'black' : 'yellow'; // Yellow text in dark mode

    // Ensure that text in the sidebar buttons stays black in both modes
    const sidebarButtons = document.querySelectorAll('.hotel-button');
    sidebarButtons.forEach(button => {
      button.style.color = isLightOn ? 'black' : 'black'; // Keep the button text black
    });
  }, [isLightOn]);

  const styles = {
    color: isLightOn ? 'black' : 'yellow', // Text color based on light/dark mode
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
  };

  const buttonStyles = {
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    backgroundColor: isLightOn ? '#f0f0f0' : '#333',
    color: isLightOn ? 'black' : 'yellow',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={styles}>
      <button onClick={toggleLight} style={buttonStyles}>
        {isLightOn ? 'Dark Mode Off' : 'Dark Mode On'}
      </button>
    </div>
  );
};

export default LightSwitch;
