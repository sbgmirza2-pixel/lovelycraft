export default function ProsCons() {
  const pros = [
    "Creative sandbox-style gameplay",
    "Focus on piston mechanics",
    "Exploration and resource gathering",
    "Character and cosmetic customization",
    "Frequent development updates",
    "Available on many platforms"
  ];

  const cons = [
    "Not for children",
    "APK versions can be hard to verify",
    "Third-party websites may contain conflicting information",
    "Requirements change between releases",
    "Users need to be cautious about unofficial APK files"
  ];

  return (
    <section className="py-12 bg-white border-b border-[#DCE8D6]" id="pros-cons">
      <div className="max-w-[1120px] mx-auto px-4 flex flex-col gap-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-[var(--font-display)] font-extrabold text-[#15251B] m-0">
          Pros and Cons
        </h2>

        {/* Stacked Layout: Pros on top, Cons below */}
        <div className="flex flex-col gap-6">
          
          {/* Pros Box */}
          <div className="bg-[#F9FCF6] border border-[#DCE8D6] p-6 md:p-8">
            <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[#23891A] mb-4 uppercase tracking-wide">
              Pros
            </h3>
            <ul className="list-disc list-inside m-0 p-0 flex flex-col gap-2.5">
              {pros.map((item, index) => (
                <li key={index} className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Box (Purple Theme) */}
          <div className="bg-[#FAF5FB] border border-[#ECC2F7] p-6 md:p-8">
            <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[#B91FCC] mb-4 uppercase tracking-wide">
              Cons
            </h3>
            <ul className="list-disc list-inside m-0 p-0 flex flex-col gap-2.5">
              {cons.map((item, index) => (
                <li key={index} className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}