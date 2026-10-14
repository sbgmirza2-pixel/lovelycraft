'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowShare(false);
    }, 1500);
  };

  const shareToSocial = (platform) => {
    let shareUrl = '';
    if (platform === 'instagram') {
      handleCopy();
      return;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
    setShowShare(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowShare(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{
      background: `
        radial-gradient(48% 70% at 10% 8%, rgba(123, 226, 60, 0.34), transparent 70%),
        radial-gradient(38% 55% at 94% 12%, rgba(123, 226, 60, 0.20), transparent 70%),
        radial-gradient(45% 60% at 88% 78%, rgba(185, 31, 204, 0.13), transparent 70%),
        linear-gradient(180deg, #E8F7DC, #F5F9F1 85%)
      `
    }}>
      {/* Floating Pixel Elements */}
      <span className="absolute z-0 pointer-events-none animate-bob w-[24px] h-[24px] bg-[#7BE23C] opacity-75 left-[7%] top-[20%] shadow-[6px_6px_0_rgba(21,37,27,0.08)]"></span>
      <span className="absolute z-0 pointer-events-none animate-bob w-[14px] h-[14px] bg-[#D86AE8] opacity-75 left-[15%] top-[58%] shadow-[3px_3px_0_rgba(21,37,27,0.08)]" style={{ animationDelay: '-2s' }}></span>
      <span className="absolute z-0 pointer-events-none animate-bob w-[28px] h-[28px] bg-[#E7A6F0] opacity-75 left-[88%] top-[16%] shadow-[7px_7px_0_rgba(21,37,27,0.08)]" style={{ animationDelay: '-4s' }}></span>
      <span className="absolute z-0 pointer-events-none animate-bob w-[16px] h-[16px] bg-[#7BE23C] opacity-75 left-[93%] top-[50%] shadow-[4px_4px_0_rgba(21,37,27,0.08)]" style={{ animationDelay: '-1s' }}></span>
      <span className="absolute z-0 pointer-events-none animate-bob w-[12px] h-[12px] bg-[#3FBF2C] opacity-75 left-[80%] top-[66%] shadow-[3px_3px_0_rgba(21,37,27,0.08)]" style={{ animationDelay: '-3s' }}></span>
      <span className="absolute z-0 pointer-events-none animate-bob w-[12px] h-[12px] bg-[#D86AE8] opacity-75 left-[25%] top-[12%] shadow-[3px_3px_0_rgba(21,37,27,0.08)]" style={{ animationDelay: '-5s' }}></span>

      {/* Padding reduced here: pt-12 md:pt-16 pb-12 md:pb-16 */}
      <div className="max-w-[1120px] mx-auto px-4 relative z-10 pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="flex flex-col gap-6 items-center text-center max-w-[780px] mx-auto">
          
          <h1 className="text-[clamp(2.6rem,7vw,4.6rem)] font-[var(--font-display)] font-extrabold leading-[1.1] tracking-[-0.02em] m-0 text-[#15251B]">
            Lovely Craft <span className="text-[#B91FCC]">APK</span>
          </h1>

          <p className="font-[var(--font-body)] text-[1.18rem] text-[#51655A] max-w-[58ch] m-0 leading-relaxed">
            Lovely Craft is developed by Crime. This game is available for Android, Windows, and Linux. The developer&apos;s release notes from October 2025 version 0.2.99 on Android, but other version numbers can find on some third-party APK sites. Users should check the version, size, and source of any APK when they want to install.
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center relative">
            {/* Download Button */}
            <a 
              className="inline-flex items-center gap-2.5 px-6 py-3 font-[var(--font-body)] font-bold text-sm text-white no-underline rounded-none border border-[#1E8A17]/40 shadow-[0_4px_12px_rgba(35,137,26,0.25)] hover:shadow-[0_6px_16px_rgba(35,137,26,0.35)] transition-all"
              style={{ background: 'linear-gradient(135deg, #34BC24, #1E8A17)' }}
              href="#download"
            >
              <svg className="w-5 h-5 p-0.5 bg-white/22 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/>
              </svg>
              Download Lovely Craft
            </a>

            {/* Install Guide Button */}
            <a 
              className="inline-flex items-center justify-center px-5 py-3 font-[var(--font-body)] font-bold text-sm text-[#1A6D13] bg-white border border-[#23891A]/30 rounded-none shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:bg-[#E5F5DC] transition-all"
              href="#install"
            >
              Install guide
            </a>

            {/* Expandable Horizontal Share Strip */}
            <div className="relative z-40" ref={menuRef}>
              <div 
                className={`flex items-center bg-white border border-[#DCE8D6] rounded-none shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out ${
                  showShare ? 'px-2 py-1.5 gap-2' : 'p-0'
                }`}
              >
                <button 
                  onClick={() => setShowShare(!showShare)}
                  className="inline-flex items-center gap-2 px-5 py-3 font-[var(--font-body)] font-bold text-sm text-[#51655A] bg-white rounded-none hover:bg-gray-50 transition-all cursor-pointer"
                  title="Share"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4m0 0L8 6m4-4v12" />
                  </svg>
                  Share
                </button>

                {showShare && (
                  <div className="flex items-center gap-1.5 border-l border-[#DCE8D6] pl-2">
                    <button 
                      onClick={() => shareToSocial('instagram')}
                      className="w-8 h-8 flex items-center justify-center bg-[#F5F9F1] border border-[#DCE8D6] hover:bg-[#E5F5DC] text-[#15251B] transition-colors cursor-pointer"
                      title="Instagram (Copy Link)"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </button>

                    <button 
                      onClick={() => shareToSocial('facebook')}
                      className="w-8 h-8 flex items-center justify-center bg-[#F5F9F1] border border-[#DCE8D6] hover:bg-[#E5F5DC] text-[#15251B] transition-colors cursor-pointer"
                      title="Facebook"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </button>

                    <button 
                      onClick={() => shareToSocial('whatsapp')}
                      className="w-8 h-8 flex items-center justify-center bg-[#F5F9F1] border border-[#DCE8D6] hover:bg-[#E5F5DC] text-[#15251B] transition-colors cursor-pointer"
                      title="WhatsApp"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </button>

                    <button 
                      onClick={handleCopy}
                      className="w-8 h-8 flex items-center justify-center bg-[#23891A] text-white hover:bg-[#1A6D13] transition-colors cursor-pointer"
                      title="Copy Link"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {copied && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs font-bold whitespace-nowrap">
                  Link Copied!
                </div>
              )}
            </div>
          </div>

          <ul className="list-none m-0 p-0 flex flex-wrap justify-center font-[var(--font-body)] font-semibold text-[0.95rem] text-[#51655A]">
            <li className="pr-[14px] mr-[14px] border-r border-[#DCE8D6]"><b className="text-[#15251B]">V0.2.999</b></li>
            <li className="pr-[14px] mr-[14px] border-r border-[#DCE8D6]">1500 MB</li>
            <li className="pr-[14px] mr-[14px] border-r border-[#DCE8D6]">Android 5.0+</li>
            <li>18+</li>
          </ul>

        </div>
      </div>
    </section>
  );
}