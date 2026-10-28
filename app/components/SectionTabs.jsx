'use client';

import { useState, useEffect, useRef } from 'react';

export default function SectionTabs() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tocItems = [
    { id: 'app-info', label: 'App Information' },
    { id: 'about', label: 'About Lovely Craft APK' },
    { id: 'features', label: 'Key Features of Lovely Craft' },
    { id: 'checklist', label: 'A practical checklist for installing Lovely Craft' },
    { id: 'pros-cons', label: 'Pros and cons of Lovely Craft APK' },
    { id: 'install', label: 'Step-by-step installation guide' },
    { id: 'safety', label: 'Safety and security guidelines' },
    { id: 'who-should-try', label: 'Who should try Lovely Craft APK?' },
    { id: 'faq', label: 'Frequently asked questions' },
    { id: 'how-to-play', label: 'How to play Lovely Craft APK on Windows or PC' },
    { id: 'screenshots', label: 'lovely craft screen shots' }
  ];

  const appInfoData = [
    { label: "APP NAME", value: "Lovely Craft Piston Trap" },
    { label: "DEVELOPER", value: "Crime" },
    { label: "VERSION", value: "V0.2.999" },
    { label: "FILE SIZE", value: "15 MB" },
    { label: "REQUIRES", value: "Android 5.0+" },
    { label: "PLATFORMS", value: "Android, Windows, Linux" },
    { label: "LAST UPDATE", value: "August 9, 2026" },
  ];

  // Handle click outside & scroll to close dropdown automatically
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleScroll() {
      if (isOpen) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Top Navigation Bar */}
      <div className="bg-[#F5F9F1] border-b border-[#DCE8D6] py-3.5 sticky top-16 z-40 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1120px] mx-auto px-4 flex flex-wrap items-center gap-4 sm:gap-6">
          
          {/* App Information Tab Link */}
          <button 
            type="button"
            onClick={() => scrollToSection('app-info')}
            className="font-[var(--font-display)] font-extrabold text-xs sm:text-sm md:text-base text-[#15251B] relative pb-1.5 bg-transparent border-0 cursor-pointer shrink-0"
          >
            App Information
            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#7BE23C]"></span>
          </button>

          {/* Table of Contents Dropdown Button */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center gap-2 font-[var(--font-display)] font-bold text-xs sm:text-sm md:text-base transition-colors px-3 sm:px-3.5 py-1.5 rounded-none border cursor-pointer ${
                isOpen 
                  ? 'bg-[#E5F5DC] text-[#15251B] border-[#23891A]' 
                  : 'bg-white text-[#51655A] border-[#DCE8D6] hover:text-[#15251B] hover:border-[#23891A]'
              }`}
            >
              <span>Table of Contents</span>
              <svg
                className={`w-4 h-4 text-[#23891A] transform transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu (Without scroll, showing all items at once) */}
            {isOpen && (
              <div className="absolute left-0 mt-2 w-[90vw] sm:w-[400px] md:w-[440px] bg-white border border-[#DCE8D6] shadow-[0_10px_25px_rgba(21,37,27,0.08)] rounded-none p-2 z-50">
                <ul className="list-none m-0 p-0 flex flex-col gap-1">
                  {tocItems.map((item, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left flex items-center gap-3 px-3 py-2.5 hover:bg-[#F5F9F1] transition-all cursor-pointer group rounded-none border-0 bg-transparent"
                      >
                        <span className="w-1.5 h-1.5 bg-[#B91FCC] group-hover:scale-150 transition-transform shrink-0"></span>
                        <span className="font-[var(--font-body)] text-xs md:text-sm font-medium text-[#42544A] leading-snug group-hover:text-[#15251B] group-hover:font-semibold transition-colors">
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

      {/* App Information Section */}
      <section id="app-info" className="max-w-[1120px] mx-auto px-4 py-10 scroll-mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {appInfoData.map((item, index) => (
            <div 
              key={index} 
              className="pl-3.5 border-l-2 border-[#7BE23C] flex flex-col justify-center gap-1"
            >
              <span className="font-[var(--font-display)] text-xs font-bold text-[#6A7B71] tracking-wider uppercase">
                {item.label}
              </span>
              <span className="font-[var(--font-display)] font-extrabold text-base md:text-[1.1rem] text-[#15251B] leading-tight">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}