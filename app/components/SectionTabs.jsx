'use client';

import { useState, useEffect, useRef } from 'react';

export default function SectionTabs() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tocItems = [
    { id: 'about', label: 'Lovely Craft Piston Trap APK – Smart Piston Mechanics and Fun Traps' },
    { id: 'sandbox', label: 'Discover a Sandbox Unlike Any Other' },
    { id: 'piston-mechanics', label: 'Advanced Piston Mechanics That Bring Fun to Life' },
    { id: 'physics-system', label: 'Innovative Piston Physics System' },
    { id: 'traps-chains', label: 'From Simple Traps to Complex Chains' },
    { id: 'redstone-logic', label: 'Pressure Plates, Levers, and Redstone Logic' },
    { id: 'hidden-doors', label: 'Hidden Doors, Collapsing Floors, and Secret Paths' },
    { id: 'trap-ideas', label: 'Fun Trap Ideas for Creative Players' },
    { id: 'characters-biomes', label: 'Meet Diverse Characters and Explore Rich Biomes' },
    { id: 'build-trade', label: 'Build, Trade, and Unlock Hidden Secrets' },
    { id: 'customization', label: 'Customization That Reflects Your Personality' },
    { id: 'community-support', label: 'Regular Updates and Community Support' },
  ];

  // Click outside to close dropdown
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
    <div className="bg-[#F5F9F1] border-b border-[#DCE8D6] py-3">
      <div className="max-w-[1120px] mx-auto px-4 flex flex-wrap items-center gap-8">
        
        {/* App Information Tab (Green Underline) */}
        <a 
          href="#app-info" 
          className="font-[var(--font-display)] font-extrabold text-base md:text-lg text-[#15251B] relative pb-2 no-underline shrink-0"
        >
          App Information
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#7BE23C]"></span>
        </a>

        {/* Table of Contents Dropdown Tab */}
        <div className="relative shrink-0" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-1.5 font-[var(--font-display)] font-bold text-base md:text-lg text-[#51655A] hover:text-[#15251B] bg-transparent border-none cursor-pointer transition-colors pb-2"
          >
            <span>Table of Contents</span>
            <svg
              className={`w-4 h-4 text-[#7BE23C] transform transition-transform duration-200 ${
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

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-80 md:w-96 bg-white border-2 border-[#15251B] shadow-[4px_4px_0_#15251B] rounded-none p-3 max-h-96 overflow-y-auto z-50">
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {tocItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left flex items-start gap-2.5 p-1.5 hover:bg-[#F5F9F1] transition-colors cursor-pointer group rounded-none"
                    >
                      {/* Theme Green Bullet Point */}
                      <span className="w-2.5 h-2.5 bg-[#7BE23C] border border-[#15251B] rounded-none shrink-0 mt-1.5 group-hover:bg-[#B91FCC] transition-colors"></span>
                      <span className="font-[var(--font-body)] text-xs md:text-sm font-bold text-[#15251B] leading-snug group-hover:text-[#B91FCC] transition-colors">
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}