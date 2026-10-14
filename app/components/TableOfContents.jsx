'use client';

import { useState, useEffect, useRef } from 'react';

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tocItems = [
    { id: 'about', label: 'About Lovely Craft APK' },
    { id: 'features', label: 'Key Features of Lovely Craft' },
    { id: 'checklist', label: 'A practical checklist for installing Lovely Craft' },
    { id: 'pros-cons', label: 'Pros and cons of Lovely Craft APK' },
    { id: 'install', label: 'Step-by-step installation guide' },
    { id: 'safety', label: 'Safety and security guidelines' },
    { id: 'who-should-try', label: 'Who should try Lovely Craft APK?' },
    { id: 'faq', label: 'Frequently asked questions' }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative inline-block text-left z-30 my-4" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-5 py-3 font-[var(--font-display)] font-extrabold text-sm md:text-base text-[#15251B] bg-white border border-[#DCE8D6] rounded-none shadow-[2px_2px_0_rgba(21,37,27,0.08)] hover:bg-[#E5F5DC] transition-all cursor-pointer"
      >
        <span>Table of Contents</span>
        <svg
          className={`w-4 h-4 text-[#23891A] transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 md:w-[420px] bg-white border border-[#DCE8D6] shadow-[4px_4px_0_rgba(21,37,27,0.1)] rounded-none p-3 max-h-96 overflow-y-auto z-50">
          <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
            {tocItems.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left flex items-center gap-2.5 p-2 hover:bg-[#F5F9F1] transition-colors cursor-pointer group rounded-none border-0 bg-transparent"
                >
                  <span className="font-bold text-[#B91FCC] text-base leading-none group-hover:scale-125 transition-transform">.</span>
                  <span className="font-[var(--font-body)] text-xs md:text-sm font-semibold text-[#51655A] leading-snug group-hover:text-[#15251B] transition-colors">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}