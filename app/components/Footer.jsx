import Image from 'next/image';
import logoImage from '../../public/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#DCE8D6]" id="footer">
      <div className="max-w-[1120px] mx-auto px-4 py-8 flex flex-wrap gap-6 items-center justify-between">
        
        {/* Brand / Logo */}
        <a className="flex items-center gap-2.5 no-underline font-[var(--font-display)] font-extrabold text-lg text-[#15251B]" href="#top" aria-label="Lovely Craft home">
          <div className="w-8 h-8 relative overflow-hidden border border-[#DCE8D6] rounded-none shadow-[2px_2px_0_rgba(21,37,27,0.08)]">
            <Image 
              src={logoImage} 
              alt="Lovely Craft Logo" 
              fill 
              className="object-cover" 
            />
          </div>
          <span>Lovely Craft</span>
        </a>

        {/* Footer Navigation */}
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#about" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">About</a>
          <a href="#features" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">Features</a>
          <a href="#install" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">Install guide</a>
          <a href="#faq" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">FAQ</a>
          <a href="#" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">Privacy Policy</a>
          <a href="#" className="font-[var(--font-body)] text-[#51655A] hover:text-[#15251B] text-sm font-semibold transition-colors">Terms &amp; Conditions</a>
        </nav>

        {/* Copyright */}
        <p className="font-[var(--font-body)] text-[#51655A] text-sm w-full m-0 pt-4 border-t border-[#DCE8D6]/60">
          &copy; 2026 Lovely Craft APK. All rights reserved.
        </p>

      </div>
    </footer>
  );
}