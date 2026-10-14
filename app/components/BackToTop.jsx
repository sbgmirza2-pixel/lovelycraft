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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-white text-[#15251B] font-[var(--font-display)] font-bold text-xs md:text-sm border border-[#15251B] shadow-[3px_3px_0_#15251B] hover:bg-[#E5F5DC] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
    >
      <svg className="w-4 h-4 text-[#23891A]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      <span>Back to Top</span>
    </button>
  );
}