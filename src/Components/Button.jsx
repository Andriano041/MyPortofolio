import React, { useState } from 'react';

const Button = ({ children, onClick }) => {
  const [hover, setHover] = useState(false);

  const style = {
    background: hover 
      ? 'linear-gradient(45deg, #059ac8ff, #2c02ffff)' // warna lebih terang & gradien
      : '#007fe8ff',
    color: '#fff',
    padding: '12px 28px',
    border: 'none',
    borderRadius: '999px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 1.0s ease',
    marginTop: '18px',
    boxShadow: hover 
      ? '0 8px 20px rgba(0, 255, 225, 0.5)'  // glow saat hover
      : '0 4px 10px rgba(0, 157, 255, 0.2)',
    transform: hover ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};

export default Button;
