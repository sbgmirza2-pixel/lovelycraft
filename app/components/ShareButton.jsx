'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* Outer Circle */}
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="#23891A" 
          strokeWidth="2.2" 
          fill="#F5F9F1"
        />
        {/* Upward Arrow */}
        <path 
          d="M7.5 13.5L12 9L16.5 13.5" 
          stroke="#23891A" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </button>
  );
}