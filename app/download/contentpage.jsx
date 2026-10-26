'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DownloadContentPage() {
  const [countdown, setCountdown] = useState(10);
  const [downloadReady, setDownloadReady] = useState(false);

  // 10 second autostart timer
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setDownloadReady(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const steps = [
    "Go to Settings > Security or Install Unknown Apps and allow your browser to install APK files.",
    "Tap the Download APK button and wait for the download to finish.",
    "Open your Downloads folder and locate the Lovely Craft APK file.",
    "Tap the APK file and press Install to complete the installation.",
    "Open Lovely Craft from your app drawer and start playing."
  ];

  // SVG Gauge calculations
  const strokeDashoffset = 283 - (283 * (10 - countdown)) / 10;

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-[var(--font-body)] text-[#15251B]">
      {/* Navbar Integration */}
      <Navbar />

      <main className="pt-8 pb-16 md:pt-12 md:pb-24 flex-grow relative">
        <div className="max-w-[960px] mx-auto px-4 flex flex-col items-center text-center">
          
          {/* 1. Main Heading */}
          <h1 className="text-3xl md:text-5xl font-[var(--font-display)] font-black text-[#15251B] m-0 tracking-tight leading-tight">
            Download Lovely Craft
          </h1>

          {/* 2. Main Paragraph with Link to Home */}
          <p className="text-[#51655A] text-base md:text-lg leading-relaxed mt-4 mb-8 max-w-2xl">
            <Link href="/" className="text-[#23891A] font-bold hover:underline">
              Lovely Craft
            </Link>{" "}
            is a creative sandbox game where you can build and explore different environments. Enjoy its block-style world and unique gameplay on your Android device. Explore new areas and try different in-game activities.
          </p>

          {/* 3. Timer & Glowing Download Box Area */}
          <div className="w-full my-6 flex flex-col items-center justify-center min-h-[240px]">
            {!downloadReady ? (
              <div className="flex flex-col items-center gap-4">
                
                {/* Circular Dash-Mark Timer */}
                <div className="relative w-44 h-44 flex items-center justify-center drop-shadow-[0_0_20px_rgba(35,137,26,0.35)]">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background Dash Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      className="stroke-[#F5F9F1]"
                      strokeWidth="4"
                      strokeDasharray="4 6"
                      fill="transparent"
                    />
                    {/* Active Green Dash Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      className="stroke-[#23891A] transition-all duration-1000 ease-linear"
                      strokeWidth="4"
                      strokeDasharray="4 6"
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  
                  {/* Digital Counter Display */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-[var(--font-display)] text-5xl font-black text-[#15251B] tracking-tighter">
                      0:{countdown < 10 ? `0${countdown}` : countdown}
                    </span>
                    <span className="font-mono text-[10px] text-[#23891A] font-bold uppercase tracking-widest mt-0.5">
                      SECONDS
                    </span>
                  </div>
                </div>

                <p className="text-sm font-mono font-semibold text-[#51655A] m-0">
                  Preparing your secure download link...
                </p>

              </div>
            ) : (
              /* Light/White Card Box with Sharp Glowing Green Border Effect */
              <div className="w-full max-w-2xl my-4 p-8 md:p-12 bg-white border-2 border-[#23891A] rounded-none shadow-[0_0_35px_rgba(35,137,26,0.35)] transition-all duration-300 flex flex-col items-center justify-center gap-6 animate-fade-in relative overflow-hidden">
                
                {/* Background Subtle Green Accent */}
                <div className="absolute inset-0 bg-[#23891A]/5 pointer-events-none"></div>

                {/* Status Line */}
                <p className="text-base md:text-lg font-bold text-[#15251B] m-0 leading-snug relative z-10">
                  Download the latest version and start your adventure.
                </p>

                {/* Download Button with Icon */}
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Your Lovely Craft APK download has started!");
                  }}
                  className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto py-4 px-10 bg-[#23891A] hover:bg-[#1f7917] text-white font-[var(--font-display)] font-extrabold text-lg rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(35,137,26,0.5)] hover:shadow-[0_0_30px_rgba(35,137,26,0.8)] cursor-pointer uppercase tracking-wider relative z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Lovely Craft
                </a>

              </div>
            )}
          </div>

          {/* 4. Installation Steps Section */}
          <div className="w-full max-w-2xl mt-12 text-left border-t border-[#DCE8D6] pt-10">
            <h2 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-[#15251B] mb-2">
              How to Install Lovely Craft APK
            </h2>
            <p className="text-[#51655A] text-sm md:text-base mb-6">
              Follow the steps below to download and install Lovely Craft APK on your Android device:
            </p>

            <ol className="m-0 p-0 flex flex-col gap-4 font-[var(--font-body)] text-[#15251B]">
              {steps.map((stepText, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  {/* Made step numbers slightly larger (w-9 h-9, text-sm) */}
                  <span className="font-mono text-sm font-bold text-[#23891A] bg-[#F5F9F1] border border-[#DCE8D6] w-8 h-8 flex items-center justify-center shrink-0 rounded-none mt-0.5 shadow-sm">
                    0{idx + 1}
                  </span>
                  <p className="text-sm md:text-base leading-relaxed m-0 pt-1.5">
                    {stepText}
                  </p>
                </li>
              ))}
            </ol>

            <p className="text-xs md:text-sm font-medium text-[#51655A] mt-8 pt-4 border-t border-[#DCE8D6]">
              <strong className="text-[#23891A]">Note:</strong> Download APK files only from trusted sources.
            </p>
          </div>

        </div>
      </main>

      {/* Footer Integration */}
      <Footer />
    </div>
  );
}