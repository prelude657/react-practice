import React, { useState } from 'react';

const MessagePrinter = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Determine the color based on the first character
  const messageStyle = {
    color: message.toLowerCase().startsWith('k') ? 'red' : 'black',
    fontSize: '1.5rem',
    marginTop: '1rem',
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Type a Message
      </h1>
      
      <input 
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Enter your message"
        style={{
          height: '55px',
          width: '350px',
          textAlign: 'center',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '1rem'
        }}
      />
      
      <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>You typed:</p>
      <h2 style={messageStyle}>{message}</h2>
    </div>
  );
};

export default MessagePrinter;
