'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F9F1]/92 backdrop-blur-md border-b border-[#DCE8D6]">
      <div className="max-w-[1120px] mx-auto px-4 py-2.5 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link className="flex items-center gap-2.5 text-[#15251B] no-underline font-extrabold text-[1.2rem] tracking-tight" href="/">
          <div className="w-10 h-10 rounded-none overflow-hidden border-2 border-[#15251B] bg-white shrink-0">
            <Image src="/logo.jpg" alt="Lovely Craft" width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <span>Lovely Craft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-[#51655A] no-underline font-semibold text-[0.95rem] rounded-lg hover:text-[#15251B] hover:bg-[#E5F5DC] transition-colors">
            Home
          </Link>
          <Link href="#faq" className="px-3 py-2 text-[#51655A] no-underline font-semibold text-[0.95rem] rounded-lg hover:text-[#15251B] hover:bg-[#E5F5DC] transition-colors">
            FAQs
          </Link>
          <Link href="/blogs" className="px-3 py-2 text-[#51655A] no-underline font-semibold text-[0.95rem] rounded-lg hover:text-[#15251B] hover:bg-[#E5F5DC] transition-colors">
            Blogs
          </Link>
          
          {/* Download Button */}
          <a 
            href="#install" 
            className="ml-2 px-5 py-2.5 text-white font-bold text-[0.95rem] no-underline rounded-none border border-[#1E8A17]/40 shadow-[0_4px_12px_rgba(35,137,26,0.25)] transition-all inline-block"
            style={{ background: 'linear-gradient(135deg, #34BC24, #1E8A17)' }}
          >
            Download APK
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#15251B] bg-transparent border-0 cursor-pointer focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#DCE8D6] px-4 py-5 flex flex-col gap-3 shadow-lg">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-semibold text-base text-[#51655A] hover:text-[#15251B] py-2 no-underline border-b border-[#F0F5EC]"
          >
            Home
          </Link>
          <Link 
            href="#faq" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-semibold text-base text-[#51655A] hover:text-[#15251B] py-2 no-underline border-b border-[#F0F5EC]"
          >
            FAQs
          </Link>
          <Link 
            href="/blogs" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-semibold text-base text-[#51655A] hover:text-[#15251B] py-2 no-underline border-b border-[#F0F5EC]"
          >
            Blogs
          </Link>
          
          {/* Download Button in Mobile Menu */}
          <a
            href="#install"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 w-full text-center px-5 py-3 text-white font-bold text-base no-underline rounded-none border border-[#1E8A17]/40 shadow-[0_4px_12px_rgba(35,137,26,0.25)] block"
            style={{ background: 'linear-gradient(135deg, #34BC24, #1E8A17)' }}
          >
            Download APK
          </a>
        </div>
      )}
    </header>
  );
}