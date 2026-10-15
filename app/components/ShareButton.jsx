'use client';

import { useState, useRef, useEffect } from 'react';

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Lovely Craft APK';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1800);
  };

  const shareToSocial = (platform) => {
    let shareUrl = '';
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} -${currentUrl}`)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
    } else if (platform === 'email') {
      shareUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Check out this page: ${currentUrl}`)}`;
    }
    
    if (shareUrl) {
      if (platform === 'email') {
        window.location.href = shareUrl;
      } else {
        window.open(shareUrl, '_blank');
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Floating Pill Container */}
      <div 
        className={`flex items-center gap-2 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#DCE8D6] shadow-[0_8px_20px_rgba(21,37,27,0.08)] transition-all duration-300 ease-out`}
      >
        {/* Main Share Toggle Icon */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border-0 ${
            isOpen 
              ? 'bg-[#7BE23C] text-[#15251B] shadow-inner rotate-45' 
              : 'bg-white text-[#15251B] hover:bg-[#E5F5DC] shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
          }`}
          title="Share"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>

        {/* Expanded Social Icons List */}
        {isOpen && (
          <div className="flex items-center gap-2 pr-1 animate-fadeIn flex-wrap max-w-[280px]">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={() => shareToSocial('whatsapp')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0"
              title="WhatsApp"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </button>

            {/* Twitter / X */}
            <button
              type="button"
              onClick={() => shareToSocial('twitter')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0"
              title="Twitter / X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>

            {/* Facebook */}
            <button
              type="button"
              onClick={() => shareToSocial('facebook')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </button>

            {/* Email */}
            <button
              type="button"
              onClick={() => shareToSocial('email')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0"
              title="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </button>

            {/* Copy Link */}
            <button
              type="button"
              onClick={handleCopy}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0"
              title="Copy Link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Copied Tooltip */}
      {copied && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-[#15251B] text-white text-xs font-bold rounded-full shadow-md whitespace-nowrap">
          Link Copied!
        </div>
      )}
    </div>
  );
}