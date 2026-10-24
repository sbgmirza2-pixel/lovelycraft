import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../../public/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#DCE8D6]" id="footer">
      <div className="max-w-[1020px] mx-auto px-6 py-12">
        
        {/* Main Footer Grid with balanced spacing from edges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-[#DCE8D6]">
          
          {/* Left Column: Logo, Description & Social Icons (Takes 7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <Link className="flex items-center gap-2.5 no-underline font-[var(--font-display)] font-extrabold text-lg text-[#15251B]" href="/" aria-label="Lovely Craft home">
              <div className="w-8 h-8 relative overflow-hidden border border-[#DCE8D6] rounded-none shadow-[2px_2px_0_rgba(21,37,27,0.08)]">
                <Image 
                  src={logoImage} 
                  alt="Lovely Craft Logo" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <span>Lovely Craft</span>
            </Link>

            <p className="font-[var(--font-body)] text-[#51655A] text-sm leading-relaxed max-w-md m-0">
              Lovely Craft APK download guides for an Android sandbox crafting game with block-based building, creative gameplay, and piston trap designs.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center bg-[#F5F9F1] border border-[#DCE8D6] text-[#51655A] hover:text-[#23891A] hover:border-[#23891A] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center bg-[#F5F9F1] border border-[#DCE8D6] text-[#51655A] hover:text-[#23891A] hover:border-[#23891A] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
            
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center bg-[#F5F9F1] border border-[#DCE8D6] text-[#51655A] hover:text-[#23891A] hover:border-[#23891A] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Vertical Pages / Links (Takes 5 cols, neatly aligned towards center) */}
          <div className="md:col-span-5 flex flex-col gap-3 md:pl-8">
            <h3 className="font-[var(--font-display)] font-bold text-[#15251B] text-sm uppercase tracking-wider mb-1">
              Quick Links
            </h3>
            <nav aria-label="Footer" className="flex flex-col gap-2.5">
              <Link href="/about-us" className="font-[var(--font-body)] text-[#51655A] hover:text-[#23891A] text-sm font-semibold transition-colors">
                About Us
              </Link>
              <Link href="/contact-us" className="font-[var(--font-body)] text-[#51655A] hover:text-[#23891A] text-sm font-semibold transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy-policy" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">
                Disclaimer
              </Link>
              <Link href="/terms-and-conditions" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/dmca" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">
                DMCA
              </Link>
              <Link href="/faqs" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">
                FAQs
              </Link>
            </nav>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-body)] text-[#51655A] text-sm m-0">
            &copy; 2026 Lovely Craft APK. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#51655A]">
            <span>Secure Download</span>
            <span>•</span>
            <span>Android Optimized</span>
          </div>
        </div>

      </div>
    </footer>
  );
}