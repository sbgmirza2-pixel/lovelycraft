export default function Safety() {
  const precautionsList = [
    "Scan the file.",
    "Check for unusual behavior.",
    "Protect Personal data.",
    "Keep your device updated.",
    "Remove unusual apps."
  ];

  return (
    <section id="safety" className="py-14 bg-white border-b border-[#DCE8D6]">
      <div className="max-w-[1120px] mx-auto px-4 flex flex-col gap-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl md:text-3xl font-[var(--font-display)] font-bold text-[#15251B] m-0">
            Is Lovely Craft Piston Trap Safe to Use?
          </h2>
          <p className="font-[var(--font-body)] text-[#51655A] text-sm md:text-base m-0 leading-relaxed max-w-3xl">
            The safety of Lovely Craft Piston Trap depends on the source where you are downloading the APK. APK files are generally safe to use, but sometimes unofficial copies can change the original version. Take these simple precautions before you start the game:
          </p>
        </div>

        {/* Modern Precautions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {precautionsList.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#DCE8D6] p-5 flex items-center gap-4 shadow-sm hover:border-[#23891A] transition-colors"
            >
              <span className="w-8 h-8 bg-[#23891A] text-white font-[var(--font-display)] font-bold text-sm flex items-center justify-center shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="font-[var(--font-body)] text-[#15251B] text-sm md:text-base font-medium m-0">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}