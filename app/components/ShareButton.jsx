'use client';

import { useState, useRef, useEffect } from 'react';

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Lovely Craft APK';

  const shareToSocial = (platform) => {
    let shareUrl = '';
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} -${currentUrl}`)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    } else if (platform === 'reddit') {
      shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareTitle)}`;
    } else if (platform === 'pinterest') {
      shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(shareTitle)}`;
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
      <div 
        className="flex items-center gap-2 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DCE8D6] shadow-[0_8px_20px_rgba(21,37,27,0.08)] transition-all duration-300 ease-out"
      >
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer border-0 shrink-0 ${
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

        {/* Social Icons Strip (Scrollbar and overflow lines removed completely) */}
        {isOpen && (
          <div className="flex items-center gap-2 pr-1 animate-fadeIn flex-nowrap">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={() => shareToSocial('whatsapp')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0 shrink-0"
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
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0 shrink-0"
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
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0 shrink-0"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </button>

            {/* Pinterest */}
            <button
              type="button"
              onClick={() => shareToSocial('pinterest')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0 shrink-0"
              title="Pinterest"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.292 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.696-2.433-2.876-2.433-4.626 0-3.767 2.738-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.903 0 4.122-2.599 7.44-6.204 7.44-1.211 0-2.35-.629-2.74-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </button>

            {/* Email */}
            <button
              type="button"
              onClick={() => shareToSocial('email')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E5F5DC] text-[#15251B] flex items-center justify-center transition-transform hover:scale-110 shadow-[0_2px_6px_rgba(0,0,0,0.05)] cursor-pointer border-0 shrink-0"
              title="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}