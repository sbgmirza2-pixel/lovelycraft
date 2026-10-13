export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          Lovely <span className="text-emerald-400">Craft</span>
        </a>
        <a
          href="#download"
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 text-sm"
        >
          Download APK
        </a>
      </div>
    </header>
  );
}