import ShareButton from "./ShareButton";

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{
        background: `
          radial-gradient(48% 70% at 10% 8%, rgba(123, 226, 60, 0.25), transparent 70%),
          radial-gradient(38% 55% at 94% 12%, rgba(123, 226, 60, 0.15), transparent 70%),
          linear-gradient(180deg, #E8F7DC, #F5F9F1 85%)
        `
      }}
    >
      <div className="max-w-[1120px] mx-auto px-4 relative z-10 pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="flex flex-col gap-6 items-start text-left max-w-[780px]">
          
          <h1 className="text-[clamp(2.6rem,7vw,4.6rem)] font-[var(--font-display)] font-extrabold leading-[1.1] tracking-[-0.02em] m-0 text-[#15251B] ">
            Lovely Craft 
          </h1>

          <p className="font-[var(--font-body)] text-[1.18rem] text-[#51655A] max-w-[58ch] m-0 leading-relaxed">
            Lovely Craft Piston Trap is developed by Crime. This game is available for Android, Windows, and Linux. The developer&apos;s release notes from October 2025 version 0.2.99 on Android, but other version numbers can find on some third-party APK sites. Users should check the version, size, and source of any APK when they want to install.
          </p>

          <div className="flex flex-wrap gap-3 justify-start items-center relative">
            {/* Download Button */}
            <a 
              className="inline-flex items-center gap-2.5 px-6 py-3 font-[var(--font-body)] font-bold text-sm text-white no-underline rounded-none border border-[#1E8A17]/40 shadow-[0_4px_12px_rgba(35,137,26,0.25)] hover:shadow-[0_6px_16px_rgba(35,137,26,0.35)] transition-all"
              style={{ background: 'linear-gradient(135deg, #34BC24, #1E8A17)' }}
              href="#download"
            >
           
              Download Lovely Craft
            </a>

            {/* Install Guide Button */}
            <a 
              className="inline-flex items-center justify-center px-5 py-3 font-[var(--font-body)] font-bold text-sm text-[#1A6D13] bg-white border border-[#23891A]/30 rounded-none shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:bg-[#E5F5DC] transition-all"
              href="#install"
            >
              Installation guide
            </a>

            {/* Share Button */}
            <ShareButton />
          </div>

        </div>
      </div>
    </section>
  );
}