export default function WhoShouldTry() {
  const tryList = [
    "Like games that let you play at your own pace.",
    "Prefer to experiment instead of following a set story.",
    "Like to see how all the elements of the game fit together.",
    "Want a casual game for creative and experimental play.",
    "Meet the game's 18+ age requirement."
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#DCE8D6]" id="who-should-try">
      <div className="max-w-[1120px] mx-auto px-4">
        
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {/* Tag / Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#7BE23C] inline-block"></span>
              <span className="font-pixel text-[0.8rem] uppercase tracking-[0.14em] font-bold text-[#B91FCC]">
                IS IT FOR YOU
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-[var(--font-display)] font-extrabold text-[#15251B] leading-[1.2] m-0">
              Who should try Lovely Craft APK?
            </h2>

            {/* Description Paragraph */}
            <p className="font-[var(--font-body)] text-[#51655A] text-base leading-relaxed m-0 mt-2">
              Lovely Craft can be a good option for players who want a game that feels different from standard mobile games. It may suit you if you:
            </p>
          </div>

          {/* Right Column: List with Lines */}
          <div className="md:col-span-7">
            <ul className="list-none m-0 p-0 flex flex-col border-t border-[#E8F3E2]">
              {tryList.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 py-4 border-b border-[#E8F3E2]"
                >
                  {/* Purple Bullet Block */}
                  <span className="w-2 h-2 bg-[#B91FCC] shrink-0 inline-block"></span>
                  
                  {/* Item Text */}
                  <span className="font-[var(--font-body)] text-[#15251B] font-medium text-base md:text-[17px]">
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