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
    <section className="py-10 md:py-14 bg-white border-b border-[#DCE8D6]" id="pros-cons">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-[var(--font-display)] font-bold text-[#15251B] mb-8 text-left">
          Pros and cons of Lovely Craft APK
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Pros Card (Green Theme) */}
          <div className="bg-[#EBF7E3] border border-[#CDE8BC] p-6 md:p-8 rounded-2xl flex flex-col gap-5">
            <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-[#15251B] m-0">
              Pros
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
              {pros.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-[#23891A] text-white font-bold text-sm flex items-center justify-center rounded-md shrink-0">
                    +
                  </span>
                  <span className="font-[var(--font-body)] text-[#15251B] text-base font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Card (Pink/Purple Theme) */}
          <div className="bg-[#F8E7FB] border border-[#ECC2F7] p-6 md:p-8 rounded-2xl flex flex-col gap-5">
            <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-[#15251B] m-0">
              Cons
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
              {cons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#B91FCC] text-white font-bold text-sm flex items-center justify-center rounded-md shrink-0 mt-0.5">
                    −
                  </span>
                  <span className="font-[var(--font-body)] text-[#15251B] text-base font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}