import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-[#F5F9F1]/92 backdrop-blur-md border-b border-[#DCE8D6]">
      <div className="max-w-[1120px] mx-auto px-4 py-2.5 flex items-center justify-between">
        <a className="flex items-center gap-2.5 text-[#15251B] no-underline font-extrabold text-[1.2rem] tracking-tight" href="#top">
          <div className="w-10 h-10 rounded-none overflow-hidden border-2 border-[#15251B] bg-white">
            <Image src="/logo.jpg" alt="Lovely Craft" width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <span>Lovely Craft</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <a href="#about" className="px-3 py-2 text-[#51655A] no-underline font-semibold text-[0.95rem] rounded-lg hover:text-[#15251B] hover:bg-[#E5F5DC] transition-colors">About</a>
          <a href="#features" className="px-3 py-2 text-[#51655A] no-underline font-semibold text-[0.95rem] rounded-lg hover:text-[#15251B] hover:bg-[#E5F5DC] transition-colors">Features</a>
          <a href="#install" className="px-3 py-2 text-[#51655A] no-underline font-semibold text-[0.95rem] rounded-lg hover:text-[#15251B] hover:bg-[#E5F5DC] transition-colors">Install</a>
          <a href="#faq" className="px-3 py-2 text-[#51655A] no-underline font-semibold text-[0.95rem] rounded-lg hover:text-[#15251B] hover:bg-[#E5F5DC] transition-colors">FAQ</a>
          <a 
            href="#download" 
            className="ml-2 px-5 py-2.5 text-white font-bold text-[0.95rem] no-underline rounded-none border border-[#1E8A17]/40 shadow-[0_4px_12px_rgba(35,137,26,0.25)] transition-all"
            style={{ background: 'linear-gradient(135deg, #34BC24, #1E8A17)' }}
          >
            Download APK
          </a>
        </nav>
      </div>
    </header>
  );
}