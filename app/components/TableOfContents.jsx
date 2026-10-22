'use client';

export default function TableOfContents() {
  const tocItems = [
    { id: 'about', label: 'About Lovely Craft APK Piston Trap' },
    { id: 'features', label: 'Key Features of Lovely Craft' },
    { id: 'checklist', label: 'A practical checklist for installing Lovely Craft' },
    { id: 'pros-cons', label: 'Pros and cons of Lovely Craft APK' },
    { id: 'install', label: 'Step-by-step installation guide' },
    { id: 'safety', label: 'Safety and security guidelines' },
    { id: 'who-should-try', label: 'Who should try Lovely Craft APK?' },
    { id: 'faq', label: 'Frequently asked questions' },
    { id: 'how-to-play', label: 'How to play Lovely Craft APK on Windows or PC' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      aria-label="Table of contents"
      className="my-5 w-full border border-[#DCE8D6] bg-white p-4 md:p-5 shadow-[3px_3px_0_rgba(21,37,27,0.06)]"
    >
      <h2 className="mb-3 border-b border-[#E5EDE0] pb-3 font-[var(--font-display)] text-base font-extrabold text-[#15251B] md:text-lg">
        Table of Contents
      </h2>
      <ul className="m-0 grid list-none grid-cols-1 gap-1 p-0 md:grid-cols-2">
        {tocItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="group flex w-full items-start gap-2.5 border-0 bg-transparent p-2 text-left transition-colors hover:bg-[#F5F9F1]"
            >
              <span className="mt-0.5 text-base font-bold leading-none text-[#B91FCC]">▪</span>
              <span className="font-[var(--font-body)] text-xs font-semibold leading-snug text-[#51655A] transition-colors group-hover:text-[#15251B] md:text-sm">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
